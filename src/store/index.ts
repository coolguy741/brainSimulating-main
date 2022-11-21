import create from "zustand"
import produce from "immer"

const useStore = create((set) => ({
	stageInfo: {
		stage: 1
	},
	setStageInfo: (payload: any) => set(produce((state: any) => {
		state.stageInfo = payload
	})),

	answerInfo: {} as any,
	setAnswerInfo: (payload: any) => set(produce((state: any) => {
		state.answerInfo = payload
	})),
}))

export default useStore
