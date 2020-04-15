import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

// Initial State
const initialState = {

    questions: [
        { no: 1, question: 'Do you have cough?', value: 1 },
        { no: 2, question: 'Do you have colds?', value: 1 },
        { no: 3, question: 'Are you having Diarrhea?', value: 1 },
        { no: 4, question: 'Do you have sore throat?', value: 1 },
        { no: 5, question: 'Are you experiencing MYALGIA or Body Aches?', value: 1 },
        { no: 6, question: 'Do you have a headache', value: 1 },
        { no: 7, question: 'Do you have fever (Temperature 37.8 C and above?', value: 1 },
        { no: 8, question: 'Are you having difficulty breathing?', value: 1 },
        { no: 9, question: 'Are you experiencing fatigue', value: 2 },
        { no: 10, question: 'Have you travelled recently during the past 14 days?', value: 2 },
        { no: 11, question: 'Do you have a travel history to COVID-19 INFFECTED AREA?', value: 3 },
        { no: 12, question: 'Do you have direct contact or is taking care of a positive COVID-19 PATIENT?', value: 3 },
        { no: 13, question: 'Do you have cough?', value: 3 },
    ],
    
    results: [],
    currentResult: [],
    resultTemplate: [
        { min: 0, max: 2, result: 'May be stress related observe' },
        { min: 3, max: 5, result: 'Hydrate properly and proper personal hygiene. Observe an re-evaluate after two days' },
        { min: 6, max: 12, result: 'Seek consultation with a doctor' },
        { min: 12, max: 24, result: 'Call the DOH Hotline 02-8-651-7800' }
    ],
    questionNo: 0,
    tips: [
        {
            sn: 1,
            title: '',
            sourceAuthor: '',
            body: {
                art1: '',
                imageUrl: '',
                art1: '',
                art1: '',
                art1: '',
            },
            references: [
                '', ''
            ]
        }
    ],
    // result:
}

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    const baseUrl = 'http://gdgcovidtracker.herokuapp.com/v1'

    // Actions
    function incrementQuestionNo(no) {
        dispatch({
            type: 'INCREMENT_QUESTION_NO',
            payload: no
        });
    }
    function resetQuestionNo(no) {
        dispatch({
            type: 'INCREMENT_QUESTION_NO',
            payload: no
        });
    }
    async function getQuestions() {
        console.log('questions requested');
        // try {
        //     const res = await axios.get(`${baseUrl}/questions`);
        //     console.log(res);
        //     // dispatch({
        //     //     type: 'GET_TRANSACTION',
        //     //     payload: res.data.data
        //     // });
        // } catch (err) {
        //     dispatch({
        //         type: 'TRANSACTION_ERROR',
        //         payload: err.res.data.error,
        //     });
        // }

        // await axios.get(`${baseUrl}/questions`)
        //     .then(res =>
        //         dispatch({
        //             type: 'ADD_TRANSACTION',
        //             payload: res.json()
        //         })
        //     ).catch(err =>
        //         dispatch({
        //             type: 'TRANSACTION_ERROR',
        //             payload: err.res.data.error,
        //         })

        //     )
    }
    async function deleteTransaction(id) {
        try {
            await axios.delete(`${baseUrl}/${id}`);
            dispatch({
                type: 'DELETE_TRANSACTION',
                payload: id
            });
        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.res.data.error,
            });
        }

    }
    async function loginUser(loginDetails) {
        console.log(loginDetails);
        // const config = {
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // }
        // try {
        //     const res = await axios.post(`${baseUrl}/login`, loginDetails, config);
        //     dispatch({
        //         type: 'ADD_TRANSACTION',
        //         payload: res.data.data
        //     });
        // } catch (err) {
        //     dispatch({
        //         type: 'TRANSACTION_ERROR',
        //         payload: err.res.data.error,
        //     });
        // }

    }
    async function registerUser(registerDetails) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        await axios.post(`${baseUrl}/register`, registerDetails, config)
            .then(res =>
                dispatch({
                    type: 'ADD_TRANSACTION',
                    payload: res.json()
                })
            ).catch(err =>
                dispatch({
                    type: 'TRANSACTION_ERROR',
                    payload: err.res.data.error,
                })

            )

    }


    return (
        <GlobalContext.Provider
            value={{

                questions: state.questions,
                questionNo: state.questionNo,

                incrementQuestionNo,
                resetQuestionNo,

                loginUser,

            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}