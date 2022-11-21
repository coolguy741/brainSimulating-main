export const transitionTime = 1000

export const questionInfo = [
    {
        text: `How old are you?`,
        type: 'number',
        answer: {
            min: 18,
            max: 35,
        }
    }, {
        text: `How old were you when you first saw porn?`,
        type: 'number',
        answer: {
            min: 5,
            max: 30,
        }
    }, {
        text: `How many hours a week do you watch porn?`,
        type: 'number',
        answer: {
            min: 0,
            max: 40,
        }
    }, {
        text: `Would your taste in porn be considered hardcore?`,
        type: 'select',
        answer: ['No', 'Possibly', 'Yes' ]
    }, {
        text: `Do you become agitated when you avoid porn?`,
        type: 'select',
        answer: ['No', 'Possibly', 'Yes' ]
    }
]