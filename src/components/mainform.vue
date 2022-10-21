<template>
  <!--  eslint-disable  -->
    <h1>Form</h1>
    <form @submit="Submitform">
      <p>
        <label for="alphabetic">Alphabetic</label>
        <input class="inputtext" v-model="formdata.alphabetic" name="alphabetic" type="text" placeholder="alphabetic">
        <span class="errormsg">{{this.$store.state.errorsdata.alphabetic.errors}}</span>
      </p>
      <p>
        <label for="alphanumeric">Alphanumeric</label>
        <input class="inputtext" v-model="formdata.alphanumeric" name="alphanumeric" type="text"
        placeholder="alphanumeric">
        <span class="errormsg">{{this.$store.state.errorsdata.alphanumeric.errors}}</span>
      </p>
      <p>
        <label for="alphaDash">Alphanumeric Dash</label>
        <input class="inputtext" v-model="formdata.alphaDash" name="alphaDash" type="text" placeholder="alphaDash" >
        <span class="errormsg">{{this.$store.state.errorsdata.alphaDash.errors}}</span>
      </p>
      <p>
        <label for="alphaSpace">Alphanumeric Space</label>
        <input class="inputtext" v-model="formdata.alphaSpace" name="alphaSpace" type="text" placeholder="alphaSpace">
        <span class="errormsg">{{this.$store.state.errorsdata.alphaSpace.errors}}</span>
      </p>
      <p>
        <label for="between">Between</label>
        <input class="inputtext" v-model="formdata.between" @focus.once="validationtouchbetween"
        name="between" type="text" placeholder="between">
        <span class="errormsg">{{this.$store.state.errorsdata.between.errors}}</span>
      </p>
      <p>
        <label for="decimal">Decimal</label>
        <input class="inputtext" v-model="formdata.decimal" name="decimal" type="text" placeholder="decimal">
        <span class="errormsg">{{this.$store.state.errorsdata.decimal.errors}}</span>
      </p>
      <p>
        <label for="email">Email</label>
        <input class="inputtext" v-model="formdata.email" @focus.once="validationtouchemail"
        name="email" type="text" placeholder="email">
        <span class="errormsg">{{this.$store.state.errorsdata.email.errors}}</span>
      </p>
      <p>
        <label for="includes">Includes</label>
        <input class="inputtext" v-model="formdata.includes" @focus.once="validationtouchincludes"
        name="includes" type="text" placeholder="includes">
        <span class="errormsg">{{this.$store.state.errorsdata.includes.errors}}</span>
      </p>
      <p>
        <label for="numeric">Numeric</label>
        <input class="inputtext" v-model="formdata.numeric" @focus.once="validationtouchnumeric"
        name="numeric" type="text" placeholder="numeric">
        <span class="errormsg">{{this.$store.state.errorsdata.numeric.errors}}</span>
      </p>
      <p>
        <label for="required">Required</label>
        <input class="inputtext" v-model="formdata.required" @focus.once="validationtouchrequired"
        name="required" type="text" placeholder="required">
        <span class="errormsg">{{this.$store.state.errorsdata.required.errors}}</span>
      </p>
      <input type="submit" value="Submit" :disabled="submitted"/>
      </form>
      <h1>Data Result</h1>
      <div>{{formdata}}</div>
      <h1>Data Errors</h1>
      <div>{{this.$store.state.errorsdata}}</div>

</template>

<script>
/* eslint-disable */
import { mapMutations } from 'vuex';

export default {
  name: 'form',
  data() {
    return {
      formdata: {
        alphabetic: null,
        alphanumeric: null,
        alphaDash: null,
        alphaSpace: null,
        between: null,
        decimal: null,
        email: null,
        includes: null,
        numeric: null,
        required: null,
      },
    };
  },
  computed: {
    submitted () {
      if (
        this.formdata.alphabetic !== null && this.formdata.alphabetic !== "" && 
        this.$store.state.errorsdata.alphabetic.errors == null &&
        this.formdata.alphanumeric !== null && this.formdata.alphanumeric !== "" &&
        this.$store.state.errorsdata.alphanumeric.errors == null &&
        this.formdata.alphaDash !== null && this.formdata.alphaDash !== "" &&
        this.$store.state.errorsdata.alphaDash.errors == null &&
        this.formdata.alphaSpace !== null && this.formdata.alphaSpace !== "" &&
        this.$store.state.errorsdata.alphaSpace.errors == null &&
        this.formdata.between !== null && this.formdata.between !== "" &&
        this.$store.state.errorsdata.between.errors == null &&
        this.formdata.decimal !== null && this.formdata.decimal !== "" &&
        this.$store.state.errorsdata.decimal.errors == null &&
        this.formdata.email !== null && this.formdata.email !== "" &&
        this.$store.state.errorsdata.email.errors == null &&
        this.formdata.includes !== null && this.formdata.includes !== "" &&
        this.$store.state.errorsdata.includes.errors == null &&
        this.formdata.numeric !== null && this.formdata.numeric !== "" &&
        this.$store.state.errorsdata.numeric.errors == null &&
        this.formdata.required !== null && this.formdata.required !== "" &&
        this.$store.state.errorsdata.required.errors == null)
      {return false;}
      else { return true;}
    },
  },
  watch: {
    'formdata.alphabetic': function (val) {
      this.validationalphabetic(val);
    },
    'formdata.alphanumeric': function (val) {
      this.validationalphanumeric(val);
    },
    'formdata.alphaDash': function (val) {
      this.validationalphaDash(val);
    },
    'formdata.alphaSpace': function (val) {
      this.validationalphaSpace(val);
    },
    'formdata.between': function (val) {
      this.validationbetween(val);
    },
    'formdata.decimal': function (val) {
      this.validationdecimal(val);
    },
    'formdata.email': function (val) {
      this.validationemail(val);
    },
    'formdata.includes': function (val) {
      this.validationincludes(val);
    },
    'formdata.numeric': function (val) {
      this.validationnumeric(val);
    },
    'formdata.required': function (val) {
      this.validationrequired(val);
    },
  },
  methods: {
    Submitform(e) {
      e.preventDefault();
      console.log(this.formdata);
    },
    validationalphabetic(text) {
      if(text.match(/^[A-Za-z]+$/)||text=='')
        {this.$store.state.errorsdata.alphabetic.errors=null;}
      else{this.$store.state.errorsdata.alphabetic.errors='Must be a alphabetic value';}
      this.$store.state.errorsdata.alphabetic.touched = true;
      },
    validationalphanumeric(text) {
      if(text.match(/^[0-9a-zA-Z]+$/)||text=='')
        {this.$store.state.errorsdata.alphanumeric.errors=null;}
      else{this.$store.state.errorsdata.alphanumeric.errors='Must only contain letters and numbers';}
      this.$store.state.errorsdata.alphanumeric.touched = true;
      },
    validationalphaDash(text) {
      if(text.match(/^[a-zA-Z0-9-_]+$/)||text=='')
        {this.$store.state.errorsdata.alphaDash.errors=null;}
      else{this.$store.state.errorsdata.alphaDash.errors='Must only contain letters, numbers, underscores or dashes';}
      this.$store.state.errorsdata.alphaDash.touched = true;
      },
    validationalphaSpace(text) {
      if(text.match("^[a-zA-Z0-9 ]+$")||text=='')
        {this.$store.state.errorsdata.alphaSpace.errors=null;}
      else{this.$store.state.errorsdata.alphaSpace.errors='Must only contain letters, numbers or spaces';}
      this.$store.state.errorsdata.alphaSpace.touched = true;
      },
    validationbetween(text) {
      if(0<text && text<11||text=='')
        {this.$store.state.errorsdata.between.errors=null;}
      else{this.$store.state.errorsdata.between.errors='Must be between 1 and 10';}
      },
    validationdecimal(text) {
      if(text.match("^\\d+(\\.\\d{0,2})$") ||text.match(/^([\d]+)(?:\.([\d]{1,2}?))?$/gm)||text=='')
        {this.$store.state.errorsdata.decimal.errors=null;}
      else{this.$store.state.errorsdata.decimal.errors='Must be a decimal with 2 points';}
      this.$store.state.errorsdata.decimal.touched = true;
      },
    validationemail(text) {
      if(text.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)||text=='')
        {this.$store.state.errorsdata.email.errors=null;}
      else{this.$store.state.errorsdata.email.errors='Not a valid email';}
      },
    validationincludes(text) {
      if(text=='foo'|| text=='bar'||text=='')
        {this.$store.state.errorsdata.includes.errors=null;}
      else{this.$store.state.errorsdata.includes.errors= text + ' is not one of the following: foo, bar';}
      },
    validationnumeric(text) {
      if(text.match(/^\d+$/)||text=='')
        {this.$store.state.errorsdata.numeric.errors=null;}
      else{this.$store.state.errorsdata.numeric.errors='Must be a numeric value';}
      },
    validationrequired(text) {
      if(text.match(/^[\s\t\r\n]*\S+/ig))
        {this.$store.state.errorsdata.required.errors=null;}
      else{this.$store.state.errorsdata.required.errors='Required';}
      },
    ...mapMutations ([		
    'validationtouchbetween',
    'validationtouchemail',
    'validationtouchincludes',
    'validationtouchnumeric',
    'validationtouchrequired',
	])
  },
};
</script>

<style>
.inputtext {
  position: absolute;
  left: 400px;
}
.errormsg {
  position: absolute;
  left: 580px;
  color: brown;
  font-weight: bold;
}
</style>
