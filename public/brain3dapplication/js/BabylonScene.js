function BabylonScene(application) {
  PublishSubscribe.call(this);
  this.application = application;
  this.scene;
  this.engine;
  this.hdrTexture;
  this.SSAOPipeline;
  this.camera;
  this.glowLayer;
  this.highlightLayer;
  this.defaultPLR;
  this.camAlphaMax = -5;
  this.rootTransformNode;
  this.brain;
  this.sections;
  this.questionParticles;
  this.keyListener = this.onKeyListener.bind(this);
  this.emissiveIntensityScalarForBrainIdle = 0;
  this.create();
}

BabylonScene.prototype = {
  changeBackgroundColor: function (color) {
    this.scene.clearColor = BABYLON.Color3.FromHexString(color);
  },

  setGlowLayer: function (state) {
    if (state === true) {
      this.glowLayer = new BABYLON.GlowLayer("glow", this.scene);
      this.glowLayer.intensity = 2;
      this.glowLayer.blurKernelSize = 16;
    } else {
      if (this.glowLayer !== null && this.glowLayer !== undefined) {
        this.glowLayer.dispose();
      }
    }
  },
  setHighLight: function (state) {
    if (state === true) {
      this.highlightLayer = new BABYLON.HighlightLayer("highlight", this.scene);
    } else {
      if (this.highlightLayer !== null && this.highlightLayer !== undefined) {
        this.highlightLayer.dispose();
      }
    }
  },

  setBloom: function (state) {
    if (this.defaultPLR) {
      this.defaultPLR.bloomEnabled = state;
      this.defaultPLR.bloomThreshold = 0.4;
      this.defaultPLR.bloomWeight = 5;
      this.defaultPLR.bloomKernel = 64;
      this.defaultPLR.bloomScale = 2;
    }
  },

  setdefaultPP: function (state) {
    if (state === true) {
      this.defaultPLR = new BABYLON.DefaultRenderingPipeline(
        "defaultPipeline",
        true,
        this.scene,
        [this.camera]
      );

      this.defaultPLR.imageProcessingEnabled = true;
      this.defaultPLR.samples = 4;
      this.defaultPLR.fxaaEnabled = true;
      this.defaultPLR.imageProcessing.colorCurvesEnabled = false;
      this.defaultPLR.imageProcessing.vignetteEnabled = true;
      this.defaultPLR.imageProcessing.vignettecentreY = 0.4;
      this.defaultPLR.imageProcessing.vignetteWeight = 4;
      // this.defaultPLR.imageProcessing.vignetteColor = BABYLON.Color3.FromHexString("#13EBF7").toLinearSpace();
      this.defaultPLR.imageProcessing.vignetteColor =
        BABYLON.Color3.FromHexString("#b7adb6").toLinearSpace();

      this.defaultPLR.imageProcessing.colorGradingEnabled = false;
      this.defaultPLR.imageProcessing.contrast = 1.9;
      this.defaultPLR.imageProcessing.exposure = 1;
      this.defaultPLR.imageProcessing.toneMappingEnabled = false;
      this.defaultPLR.imageProcessing.toneMappingType =
        BABYLON.ImageProcessingConfiguration.TONEMAPPING_ACES;
    } else {
      if (this.defaultPLR !== null && this.defaultPLR !== undefined) {
        this.defaultPLR.dispose();
      }
    }
  },

  setSSAO: function (state) {
    if (state === true) {
      if (BABYLON.SSAO2RenderingPipeline.IsSupported) {
        // Create SSAO and configure all properties (for the example)
        var ssaoRatio = {
          ssaoRatio: 0.5, // Ratio of the SSAO post-process, in a lower resolution
          blurRatio: 0.5, // Ratio of the combine post-process (combines the SSAO and the scene)
        };
        this.SSAOPipeline = new BABYLON.SSAO2RenderingPipeline(
          "ssao",
          this.scene,
          ssaoRatio
        );
        this.SSAOPipeline.radius = 2;
        this.SSAOPipeline.totalStrength = 1;
        this.SSAOPipeline.expensiveBlur = true;
        this.SSAOPipeline.samples = 32;
        this.SSAOPipeline.maxZ = 250;
        // Attach camera to the SSAO render pipeline
        this.scene.postProcessRenderPipelineManager.attachCamerasToRenderPipeline(
          "ssao",
          this.camera
        );
        this.scene.postProcessRenderPipelineManager.enableEffectInPipeline(
          "ssao",
          this.SSAOPipeline.SSAOCombineRenderEffect,
          this.camera
        );

        //fix for ssao affecting transparent objects
        this.scene.enableGeometryBufferRenderer().renderTransparentMeshes = false;
      }
    } else {
      if (this.SSAOPipeline !== null && this.SSAOPipeline !== undefined) {
        this.SSAOPipeline.dispose();
      }
    }
  },

  load: function (url) {
    BABYLON.SceneLoader.ImportMesh(
      "",
      "",
      url,
      this.scene,
      this.loadSuccess.bind(this),
      this.loadProgress.bind(this),
      this.loadError.bind(this)
    );
  },
  loadSuccess: function (event) {
    event[0].parent = this.rootTransformNode;
    event[0].rotation = new BABYLON.Vector3(0, 0, 0);
    event[0].scaling = new BABYLON.Vector3(1, 1, 1);
    this.brain = event[0];

    this.postLoad();
  },
  postLoad: function () {
    this.setdefaultPP(true);
    this.setGlowLayer(true);

    this.sections = {};
    for (var prop in this.application.brainSectionData) {
      var section = this.application.brainSectionData[prop];
      section.node = this.scene.getNodeByName(section.nodeKey);
      section.material = this.scene.getMaterialByName(section.materialKey);
      if (section.material) {
        section.material.albedoColor = BABYLON.Color3.FromHexString(
          section.highlightColor
        ).toLinearSpace();
        section.material.emissiveColor = section.material.albedoColor;
        section.material.emissiveIntensity = 0;
      }
      if (section.handleNodeVisibilityWithEffect) {
        section.material.transparencyMode = 2;
        section.material.alpha = 0;
      }
    }
    this.brainMaterial = this.scene.getMaterialByName("brain_mass");
    this.m1 = this.scene.getMaterialByName("dorsolateral_prefrontal_cortex");
    this.m2 = this.scene.getMaterialByName("medial_prefrontal_cortex");

    this.m1.depthFunction = BABYLON.Engine.NEVER;
    this.m2.depthFunction = BABYLON.Engine.NEVER;

    this.brainMaterial.transparencyMode = 2;
    this.brainMaterial.alpha = 1;
    this.brainMaterial.metallic = 0;
    this.brainMaterial.needDepthPrePass = true;

    this.brainMaterial.clearCoat.isEnabled = false;
    this.brainMaterial.ambientTextureStrength = 0;

    // this.brainMaterial.albedoColor = BABYLON.Color3.FromHexString("#ff00dc").toLinearSpace();

    this.brainMaterial.albedoColor =
      BABYLON.Color3.FromHexString("#ffffff").toLinearSpace();
    this.brainMaterial.emissiveColor =
      BABYLON.Color3.FromHexString("#1B2729").toLinearSpace();
    this.brainMaterial.subSurface.isRefractionEnabled = false;
    this.brainMaterial.subSurface.tintColor =
      BABYLON.Color3.FromHexString("#ff00dc").toLinearSpace();
    this.brainMaterial.subSurface.tintColorAtDistance = 0;
    this.brainMaterial.subSurface.volumeIndexOfRefraction = 3;

    var tl = gsap.timeline({
      onComplete: this.onAnimation1Complete.bind(this),
    });
    tl.from(this.brain.scaling, {
      x: 0,
      y: 0,
      z: 0,
      duration: 0.45,
      ease: Back.easeOut,
      delay: 2,
    });
    tl.from(this.brain.rotation, {
      y: 12.56,
      duration: 0.35,
      ease: Power4.easeIn,
    });

    let brainSectionData = {};
    let a = this.brain.getChildren();

    for (let i = 0; i < a.length; i++) {
      let item = a[i];

      let ob = (brainSectionData[item.name] = {});

      ob.node = item;

      ob.direction1 = item.position.normalizeToNew();

      ob.position1 = item.position;

      ob.position2 = ob.position1.add(ob.direction1.scale(0.2));
      tl.to(
        item.position,
        {
          x: ob.position2.x,
          y: ob.position2.y,
          z: ob.position2.z,
          duration: 0.5,
          ease: Power1.easeOut,
        },
        "someLabel"
      );
      // tl.to(item.scaling, { x: 0.3, y: 0.3, z: 0.3, duration: 1, ease: Power4.easeOut }, "someLabel");
      tl.to(
        item.position,
        {
          x: ob.position1.x,
          y: ob.position1.y,
          z: ob.position1.z,
          duration: 0.2,
          ease: Back.easeIn,
          delay: 0.2,
        },
        "sl"
      );
      // tl.to(item.scaling, { x: 1, y: 1, z: 1, duration: 1, ease: Power4.easeOut }, "sl");
    }

    //this.loadParticleSystem();
  },
  onAnimation1Complete() {
    this.camera.useAutoRotationBehavior = true;
    this.camera.autoRotationBehavior.idleRotationSpeed = -0.1;
    //this.camera.autoRotationBehavior.targetAlpha = 2.3633;

    this.brainMaterial.albedoColor =
      BABYLON.Color3.FromHexString("#FF00E6").toLinearSpace();
    this.brainMaterial.emissiveColor =
      BABYLON.Color3.FromHexString("#FF00E6").toLinearSpace();
    this.brainMaterial.diffuseColor =
      BABYLON.Color3.FromHexString("#FF00E6").toLinearSpace();
    this.brainMaterial.tintColor =
      BABYLON.Color3.FromHexString("#FF00E6").toLinearSpace();
    this.brainMaterial.metallic = 0;
    this.brainMaterial.roughness = 0.25;
    this.brainMaterial.alpha = 0.93;
    // this.brainMaterial.isRefractionEnabled = true;
    // this.brainMaterial.indexOfRefraction = 0.1;

    // this.brainMaterial.subSurface.isRefractionEnabled = true;
    // this.brainMaterial.subSurface.tintColor = BABYLON.Color3.FromHexString("#FF00E6").toLinearSpace();
    // this.brainMaterial.subSurface.diffuseColor = BABYLON.Color3.FromHexString("#FF00A0").toLinearSpace();
    // this.brainMaterial.subSurface.emissiveColor = BABYLON.Color3.FromHexString("#FF00A0").toLinearSpace();
    // this.brainMaterial.subSurface.tintColorAtDistance = 500;
    // this.brainMaterial.subSurface.volumeIndexOfRefraction = 15;

    this.brainMaterial.clearCoat.isEnabled = false;
    this.brainMaterial.clearCoat.intensity = 0.2;
    this.brainMaterial.clearCoat.roughness = 0.9;
    this.brainMaterial.clearCoat.indexOfRefraction = 2;
    this.brainMaterial.ambientTextureStrength = 1;
    // this.brainMaterial.ambientTexture.level = 1.05;
    this.lightmapBrainTex = new BABYLON.Texture(
      "brain3dapplication/assets/images/brain_diffuselighting_invert_x1024.jpg"
    );
    this.brainMaterial.lightmapTexture = this.lightmapBrainTex;
    this.brainMaterial.lightmapTexture.level = 0.7;
    this.brainMaterial.lightmapTexture.vScale = -1;

    this.t2 = gsap.to(this.brain.scaling, {
      x: 1.005,
      y: 1.005,
      z: 1.005,
      duration: 5,
      ease: Linear,
      repeat: -1,
      yoyo: true,
    });

    var glowTween = gsap.timeline({ repeat: 1, yoyo: true });
    for (var prop in this.application.brainSectionData) {
      let item = this.application.brainSectionData[prop];
      item.material.emissiveIntensity = 0;
      if (item.handleNodeVisibilityWithEffect) {
        item.material.alpha = 0;
        glowTween.to(
          item.material,
          {
            emissiveIntensity: item.emmissiveScalar * 0.1,
            alpha: 1,
            duration: 0.1,
            ease: Linear,
          },
          "-=.05"
        );
      } else {
        glowTween.to(
          item.material,
          {
            emissiveIntensity: item.emmissiveScalar * 0.1,
            duration: 0.1,
            ease: Linear,
          },
          "-=.05"
        );
      }
    }

    this.brainMaterial.emissiveColor =
      BABYLON.Color3.FromHexString("#FF00A0").toLinearSpace();
    this.brainMaterial.emissiveIntensity = 0;
    this.brainIdleAnimation = gsap.from(this.brainMaterial, {
      emissiveIntensity: 0.8 * this.emissiveIntensityScalarForBrainIdle,
      duration: 4,
      ease: Expo.easeOut,
      repeat: -1,
      onRepeat: () => {
        this.questionParticles.start();
      },
    });
    this.brainIdleAnimation.pause();
    // this.loadParticleSystem();

    this.dispatchEvent(EventNames.LOAD_COMPLETE);
  },

  loadError: function (error) {
    this.dispatchEvent(EventNames.LOAD_ERROR, error);
  },
  loadProgress: function (event) {
    let progress = 0;
    if (event === null || event === undefined) {
      progress = "LOADING...";
    } else {
      if (!event.lengthComputable) {
        progress = "LOADING...";
      } else {
        progress = "LOADING " + (((event.loaded / event.total) * 100) | 0);
      }
    }
    this.dispatchEvent(EventNames.LOAD_PROGRESS, progress);
  },
  toggleDebug() {
    this.isDebugShowing = !this.isDebugShowing;
    if (this.isDebugShowing) {
      this.scene.debugLayer.show();
    } else {
      this.scene.debugLayer.hide();
    }
  },
  onKeyListener: function (event) {
    if (event.ctrlKey && event.keyCode === 73) {
      this.toggleDebug();
    }
  },
  loadParticleSystem: function () {
    var p = new BABYLON.ParticleHelper.ParseFromFileAsync(
      null,
      "./brain3dapplication/systems/question2.json",
      this.scene,
      false
    ).then((system) => {
      this.questionParticles = system;
      //system.emitter = this.brain;
      system.particleTexture = new BABYLON.Texture(
        "./brain3dapplication/assets/images/question_particle.png",
        this.scene
      );
      system.updateSpeed = 0.01;
      system.targetStopDuration = 1;
      system.color1 = BABYLON.Color4.FromHexString("#FFEAFFFF").toLinearSpace();

      system.emitRate = 30;
      system.start();
      this.brainIdleAnimation.play();
    });
  },

  create: function (canvas) {
    this.canvas = this.application.canvas;
    this.engine = new BABYLON.Engine(this.canvas, true); // Generate the BABYLON 3D engine
    this.engine.enableOfflineSupport = false;
    BABYLON.Database.IDBStorageEnabled = false; //disable the .manifest checking.
    this.scene = new BABYLON.Scene(this.engine); // Create the scene space

    this.rootTransformNode = new BABYLON.TransformNode("root_transform_fix");

    this.rootTransformNode.rotation = new BABYLON.Vector3(0, 0, 0);

    this.rootTransformNode.scaling = new BABYLON.Vector3(-1, 1, 1);

    //Adding an Arc Rotate this.camera ..
    this.camera = new BABYLON.ArcRotateCamera(
      "Camera",
      1.9221,
      1.6216,
      3,
      new BABYLON.Vector3(0, 0, 0),
      this.scene
    );
    this.camera.attachControl(this.canvas, false);
    this.camera.wheelPrecision = 50;
    this.camera.panningSensibility = 250;
    this.camera.pinchPrecision = 700;

    this.camera.panningSensibility = 1000;
    this.camera.allowUpsideDown = false;
    this.camera.lowerRadiusLimit = 2;
    this.camera.upperRadiusLimit = 5;
    this.camera.inputs.removeByType("ArcRotateCameraKeyboardMoveInput");
    this.camera.panningSensibility = 0;
    this.camera.inputs.remove(this.camera.inputs.attached.mousewheel);
    this.camera.targetScreenOffset.x = -0.85;
    this.camera.targetScreenOffset.y = 0.05;
    this.camera.radius = 2.8;


    this.hdrTexture = new BABYLON.CubeTexture.CreateFromPrefilteredData(
      "brain3dapplication/assets/images/autoshop_02_2k_bw.env",
      this.scene
    );
    this.hdrTexture.gammaSpace = false;
    this.hdrTexture.level = 1;
    this.scene.environmentTexture = this.hdrTexture;
    this.scene.environmentTexture.rotationY = 3.913;
    this.scene.environmentIntensity = 1.45;
    this.changeBackgroundColor("#999999");
    window.addEventListener("keydown", this.keyListener);
    this.engine.runRenderLoop(this.onRenderLoop.bind(this));
    window.addEventListener("resize", this.onWindowResize.bind(this));
    this.onWindowResize();
  },
  onRenderLoop: function () {
    this.scene.render();
  },
  onWindowResize: function () {
    this.engine.resize();
    this.canvas.width = 0;
    this.canvas.height = 0;
    setTimeout(() => {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    }, 500);
  },
};

var inherit_1 = Object.create(PublishSubscribe.prototype);
Object.assign(inherit_1, BabylonScene.prototype);
BabylonScene.prototype = inherit_1;
