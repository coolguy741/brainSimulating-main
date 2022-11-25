function Brain3DApplication() {
  PublishSubscribe.call(this);
  this.babylonScene = null;
  this.canvas = null;
  this.intOptions = null;
  this.brainSectionData = null;
  this.ready = false;
  this.question1Score = 0;
  this.question2Score = 0;
  this.question3Score = 0;
  this.question4Score = 0;
  this.question5Score = 0;
  this.question6Score = 0;
  this.question7Score = 0;
  this.question8Score = 0;
  this.question9Score = 0;
  this.question10Score = 0;
  this.on = true;

  this.weightHigh = 50;
  this.weightMedium = 30;
  this.weightLow = 0;

  this.influence = 0;
}

Brain3DApplication.prototype = {
  initialize: function (canvas, intOptions) {
    this.canvas = canvas;
    this.intOptions = intOptions;
    this.createBrainSectionData();
    this.babylonScene = new BabylonScene(this);
    this.babylonScene.addEventListener(
      EventNames.LOAD_COMPLETE,
      this.onLoadComplete.bind(this)
    );
    this.babylonScene.load("./brain3dapplication/assets/glb/brain.glb");
    this.babylonScene.turnOffLight();
  },

  createBrainSectionData: function () {
    this.brainSectionData = {};
    var sectionNames = [
      "amygdala",
      "hippocampus",
      "nucleus_accumbens",
      "striatum",
      "medial_prefrontal_cortex",
      "dorsolateral_prefrontal_cortex",
    ];
    var sectionColors = [
      "#C6AF22",
      "#25712F",
      "#12E7D7",
      "#FA7F00",
      "#28CE3E",
      "#C6AF22",
    ];
    var handleNodeVisibilityWithEffect = [
      false,
      false,
      false,
      false,
      true,
      true,
    ];
    var emmissiveScalar = [8, 8, 8, 8, 8, 8];
    this.sections = {};
    for (var i = 0; i < sectionNames.length; i++) {
      var name = sectionNames[i];
      var color = sectionColors[i];
      var section = (this.brainSectionData[name] = {});
      section.materialKey = name;
      section.nodeKey = name;
      section.highlightColor = color;
      section.handleNodeVisibilityWithEffect =
        handleNodeVisibilityWithEffect[i];
      section.emmissiveScalar = emmissiveScalar[i];
    }
  },

  onLoadComplete: function (payload) {
    this.ready = true;
    this.dispatchEvent(EventNames.LOAD_COMPLETE, payload);
  },

  question1Sum: function (value) {
    if (value <= 35) this.question1Score = 1 - (0.2 * (value - 18)) / 17;
    else this.question1Score = 0.8 - 0.5 * [(value - 35) / 55] ** 2;
    this.calculateTotalAndApply();
  },

  // form calls this function with answer 5-30
  question2Sum: function (value) {
    this.question2Score = 1 - (value - 5) / 25;
    this.calculateTotalAndApply();
  },

  // form calls this function with answer 0-40
  question3Sum: function (value) {
    this.question3Score = value / 15;
    this.calculateTotalAndApply();
  },

  // form calls this function with answer 1 or 0.5 or 0
  question4Sum: function (value) {
    this.question4Score = 1 - value * 0.5;
    this.calculateTotalAndApply();
  },

  // form calls this function with answer 1 or 0.5 or 0
  question5Sum: function (value) {
    this.question5Score = value;
    this.calculateTotalAndApply();
  },

  // turn on the light
  turnOnLight: function () {
    this.babylonScene.turnOnLight();
  },

  // turn off the light
  turnOffLight: function () {
    this.babylonScene.turnOffLight();
  },

  resetBrain: function() {
    this.babylonScene.resetBrain();
  },

  calculateTotalAndApply: function () {
    this.updateBrainSection(
      this.question1Score,
      this.question2Score,
      this.question3Score,
      this.question4Score,
      this.question5Score
    );
  },

  updateBrainZoom(zoomValue, animationTime) {
    if (animationTime) {
      gsap.to(this.babylonScene.camera, {
        radius: zoomValue,
        duration: animationTime,
        ease: Power2.easeOut,
      });
    } else {
      this.babylonScene.camera.radius = zoomValue;
    }
  },

  updateBrainOffset(offset, animationTime) {
    if (offset.x) {
      let x = parseFloat(offset.x);
      if (animationTime) {
        gsap.to(this.babylonScene.camera.targetScreenOffset, {
          x: x,
          duration: animationTime,
          ease: Power2.easeOut,
        });
        if (this.babylonScene.defaultPLR) {
          gsap.to(this.babylonScene.defaultPLR.imageProcessing, {
            vignetteCentreX: x * 0.3,
            duration: animationTime,
            ease: Power2.easeOut,
          });
        }
      } else {
        this.babylonScene.camera.targetScreenOffset.x = x;
        if (this.babylonScene.defaultPLR) {
          this.babylonScene.defaultPLR.imageProcessing.vignetteCentreX =
            x * 0.3;
        }
      }
    }
    if (offset.y) {
      let y = parseFloat(offset.y);
      if (animationTime) {
        gsap.to(this.babylonScene.camera.targetScreenOffset, {
          y: y,
          duration: animationTime,
          ease: Power2.easeOut,
        });
        if (this.babylonScene.defaultPLR) {
          gsap.to(this.babylonScene.defaultPLR.imageProcessing, {
            vignetteCentreY: y,
            duration: animationTime,
            ease: Power2.easeOut,
          });
        }
      } else {
        this.babylonScene.camera.targetScreenOffset.y = y;
        if (this.babylonScene.defaultPLR) {
          this.babylonScene.defaultPLR.imageProcessing.vignetteCentreY = y;
        }
      }
    }
  },

  stopParticles: function () {
    if (this.babylonScene.brainIdleAnimation) {
      this.babylonScene.brainIdleAnimation.revert();
    }
    if (this.babylonScene.questionParticles) {
      this.babylonScene.questionParticles.stop();
      this.babylonScene.questionParticles.dispose();
    }
  },

  updateBrainSection: function (s1, s2, s3, s4, s5) {
    if (!this.babylonScene.lightOn) return;

    value = (s1 + s2 + s3 + s4 + s5) / 5;

    if (this.babylonScene.brainIdleAnimation) {
      this.babylonScene.brainIdleAnimation.revert();
    }
    if (this.babylonScene.questionParticles) {
      this.babylonScene.questionParticles.stop();
      this.babylonScene.questionParticles.dispose();
    }

    if (!this.ready) return;
    this.influence = value;
    var duration = 0.175 - (0.125 * (s2 + s3 + s5) * s1 * s4) / 3;
    var overlap = duration * 0.9;
    var overlapString = "-=" + overlap;
    if (this.glowTween) {
      this.glowTween.kill();
    }
    this.glowTween = gsap.timeline({ repeat: -1 });
    console.log("brainSelection", this.brainSectionData);
    for (var prop in this.brainSectionData) {
      // "amygdala",
      // "hippocampus",
      // "nucleus_accumbens",
      // "striatum",
      // "medial_prefrontal_cortex",
      // "dorsolateral_prefrontal_cortex",
      let item = this.brainSectionData[prop];

      let brightness = 0;
      if (
        prop == "amygdala" ||
        prop == "hippocampus" ||
        prop == "nucleus_accumbens"
      ) {
        brightness = 0.5 + (s2 + s3 + s5) / 6;
      } else if (prop == "striatum") {
        brightness = 0.002 + (s5 ** 3 * 0.99 + (s2 + s3) * 0.005) * s1 * s4;
      } else if (prop == "medial_prefrontal_cortex") {
        brightness = 0.002 + (s3 ** 3 * 0.99 + (s2 + s5) * 0.005) * s1 * s4;
      } else if (prop == "dorsolateral_prefrontal_cortex") {
        brightness = 0.002 + (s2 ** 3 * 0.99 + (s3 + s5) * 0.005) * s1 * s4;
      }
      console.log(s1, s2, s3, s4, s5);

      item.material.emissiveIntensity = this.influence * 0.1;
      if (item.handleNodeVisibilityWithEffect) {
        item.material.alpha = 0;
        this.glowTween.to(
          item.material,
          {
            alpha: 0.8,
            emissiveIntensity: brightness * item.emmissiveScalar * 0.5,
            duration: duration,
            ease: Linear,
            yoyo: true,
            repeat: 0,
          },
          overlapString
        );
      } else {
        this.glowTween.to(
          item.material,
          {
            emissiveIntensity: brightness * item.emmissiveScalar * 0.5,
            duration: duration,
            ease: Linear,
            yoyo: true,
            repeat: 1,
          },
          overlapString
        );
      }
    }

    var effectScalar = 40;
    if (this.babylonScene.t2) {
      this.babylonScene.t2.timeScale(1 + this.influence * effectScalar);
    }
    this.babylonScene.glowLayer.blurKernelSize = 16 + 48 * this.influence;
  },
};

var inherit_1 = Object.create(PublishSubscribe.prototype);
Object.assign(inherit_1, Brain3DApplication.prototype);
Brain3DApplication.prototype = inherit_1;
