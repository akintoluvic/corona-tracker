import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

// Initial State
const initialState = {
    userToken: false,
    isLoading: false,
    isSignout: false,
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
        console.log(no);
        dispatch({
            type: 'RESET_QUESTION_NO',
            payload: no
        });
    }
    async function getQuestions() {
        console.log('questions requested');

        await axios.get(`${baseUrl}/questions`)
            .then(res => console.log(res.data)
                // dispatch({
                //     type: 'GET_QUESTIONS',
                //     payload: res.data.questions
                // })
            ).catch(err => console.log(err)
                // dispatch({
                //     type: 'GET_QUESTIONS_ERROR',
                //     payload: err,
                // })

            )
    }
    async function loginUser(loginDetails) {
        console.log(loginDetails);
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        await axios.post(`${baseUrl}/login`, loginDetails, config)
            .then(res =>
                dispatch({
                    type: 'LOGIN_USER',
                    payload: res.data
                })
            ).catch(err =>
                dispatch({
                    type: 'LOGIN_USER_ERROR',
                    payload: err,
                })

            )

    }
    async function registerUser(registerDetails) {
        console.log(registerDetails);
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        await axios.post(`${baseUrl}/register`, registerDetails, config)
            .then(res =>
                dispatch({
                    type: 'REGISTER_USER',
                    payload: res.data
                })
            ).catch(err =>
                dispatch({
                    type: 'REGISTER_USER_ERROR',
                    payload: err,
                })

            )
    }
    async function postSymptoms(symptoms) {
        console.log(symptoms);
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        await axios.post(`${baseUrl}/register`, symptoms, config)
            .then(res =>
                dispatch({
                    type: 'POST_SYMPTOMS',
                    payload: res.data
                })
            ).catch(err =>
                dispatch({
                    type: 'POST_SYMPTOMS_ERROR',
                    payload: err,
                })

            )
    }


    return (
        <GlobalContext.Provider
            value={{
                userToken: state.userToken,
                isLoading: state.isLoading,
                isSignout: state.isSignout,

                questions: state.questions,
                questionNo: state.questionNo,

                incrementQuestionNo,
                resetQuestionNo,
                getQuestions,
                postSymptoms,

                loginUser,
                registerUser,

            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}