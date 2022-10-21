/* eslint-disable*/
import { createStore } from 'vuex';

export default createStore ({
    state: {
        errorsdata: {
            alphabetic: { errors: null },
            alphanumeric: { errors: null },
            alphaDash: { errors: null },
            alphaSpace: { errors: null },
            between: { errors: null },
            decimal: { errors: null },
            email: { errors: null },
            includes: { errors: null },
            numeric: { errors: null },
            required: { errors: null },
          },
    },
    mutations: {
        validationtouchbetween(state) {
            state.errorsdata.between.errors='Must be between 1 and 10'
            state.errorsdata.between.touched = true;
            },
          validationtouchemail(state) {
            state.errorsdata.email.errors='Not a valid email'
            state.errorsdata.email.touched = true;
            },
          validationtouchincludes(state) {
            state.errorsdata.includes.errors='is not one of the following: foo, bar'
            state.errorsdata.includes.touched = true;
            },
          validationtouchnumeric(state) {
            state.errorsdata.numeric.errors='Must be a numeric value'
            state.errorsdata.numeric.touched = true;
            },
          validationtouchrequired(state) {
            state.errorsdata.required.errors='Required'
            state.errorsdata.required.touched = true;
            },
    },
});
