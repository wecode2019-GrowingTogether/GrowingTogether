<template>
  <section>
    <form>
      <div>
      <h1>1. Did you garden this year? </h1>
      <label>
        <input type="radio" name="opinion"/>
        <i></i>
        <span>Yes (skip to question 3)</span>
      </label>
      <label>
        <input type="radio" name="opinion"/>
        <i></i>
        <span>No</span>
      </label>
      </div>
      <br>
      <br>
      <br>
      <div>
        <h1>2. If you did NOT garden this year, why did you stop?  </h1>
        (Check all that apply and skip to question 10)
      <label>
        <input type="checkbox" class="option-input checkbox" />
        Did not enjoy gardening
      </label>
      <label>
        <input type="checkbox" class="option-input checkbox" />
        Moved houses
      </label>
      <label>
        <input type="checkbox" class="option-input checkbox" />
        Too time consuming
      </label>
      <label>
        <input type="checkbox" class="option-input checkbox" />
        I had no seeds or plant starts
      </label>
      <label>
        <input type="checkbox" class="option-input checkbox" />
        Physical problems (sore back, knees, etc)
      </label>
      <label>
        <input type="checkbox" class="option-input checkbox" />
        Nothing grew
      </label>
      <label>
        <input type="checkbox" class="option-input checkbox" />
        Not enough help from Growing Gardens
      </label>
      <label>
        <input type="checkbox" class="option-input checkbox" />
        Other
      </label>
    </div>
      
    <br>
    <br>
    <br>
    <div>
  <h1>3. What type of garden do you have?  </h1>
      <label>
        <input type="radio" name="opinion"/>
        <i></i>
        <span>In-Ground/Mounded Earth</span>
      </label>
      <label>
        <input type="radio" name="opinion"/>
        <i></i>
        <span>High Raised Bed (2ft tall)</span>
      </label>
        <label>
        <input type="radio" name="opinion"/>
        <i></i>
        <span>Lead-free Bed</span>
      </label>
      <label>
        <input type="radio" name="opinion"/>
        <i></i>
        <span>Container Garden</span>
      </label>
        <label>
        <input type="radio" name="opinion"/>
        <i></i>
        <span>Community Garden</span>
      </label>
      <label>
        <input type="radio" name="opinion"/>
        <i></i>
        <span>Other</span>
      </label>
    </div>
      <br>
      <br>
      <br>
    <div>
      <h1>
    4. Do you think you ate more fruits and vegetables as a result of your garden? </h1>
        <label>
        <input type="radio" name="opinion"/>
        <i></i>
        <span>Yes, I ate more fruits and vegetables</span>
      </label>
      <label>
        <input type="radio" name="opinion"/>
        <i></i>
        <span>No, I ate less than before</span>
      </label>
        <label>
        <input type="radio" name="opinion"/>
        <i></i>
        <span>I ate about the same amount</span>
      </label>
      </div>
      <br>
      <br>
      <br>
    <div>
      <h1>
    5. Have you done more exercise since having the garden?</h1>
        <label>
        <input type="radio" name="opinion"/>
        <i></i>
        <span>Yes, taking care of the garden was a form of exercise</span>
      </label>
      <label>
        <input type="radio" name="opinion"/>
        <i></i>
        <span>No, I exercised less</span>
      </label>
        <label>
        <input type="radio" name="opinion"/>
        <i></i>
        <span>Stayed the same, it made no change having a garden</span>
      </label>
      </div>
        <br>
      <br>
      <br>
    <div>
      <h1>
    6. Did having a garden change how often you went to food pantries or got emergency food boxes?</h1>
        <label>
        <input type="radio" name="opinion"/>
        <i></i>
        <span>I went to food pantries and recieved emergency food boxes MORE often</span>
      </label>
      <label>
        <input type="radio" name="opinion"/>
        <i></i>
        <span>I went to food pantries and recieved emergency food boxes LESS often</span>
      </label>
        <label>
        <input type="radio" name="opinion"/>
        <i></i>
        <span>Stayed the same as before I had a garden</span>
      </label>
      </div>
        <br>
      <br>
      <br>
    <div>
      <h1>
    7. Were the kids in your household more interested in eating fruits and vegatables as a result of your garden?</h1>
        <label>
        <input type="radio" name="opinion"/>
        <i></i>
        <span>Yes, their interest increased
        </span>
      </label>
      <label>
        <input type="radio" name="opinion"/>
        <i></i>
        <span>No, their interest decreased
    </span>
      </label>
        <label>
        <input type="radio" name="opinion"/>
        <i></i>
        <span>Their interest didn't change
      I don't have children</span>
      </label>
      </div>
    </form>
  </section>
</template>

<style scoped>
*, *:before, *:after {
  box-sizing: border-box;
}

body {
  font-family: "Open Sans", sans-serif;
  font-size: 20px;
  line-height: 1.6;
  background: #89C5CC;
  color: #fff;
  }

h1 {
  font-size: 1.2em;
  text-transform: uppercase;
  margin-bottom: 1.5em;
  letter-spacing: 3px;
  font-weight: 600;
  padding: 15px 5px 30px 0px;
  border-left: 3px solid #fff;
  border-bottom: 3px solid #fff;
  } 

form {
  display: block;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin: 50px auto;
}

label {
  display: flex;
  margin-bottom: 1.5em;
  text-align: left;
}
  
label.input {
  display: none;
}

label.i {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 5px;
    vertical-align: middle;
    border: 2px solid #fff;
    transition: .25s;
  } 
  
label.span {
    display: inline-block;
    padding-bottom: 3px;
    border-bottom: 2px dotted #fff;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: .9em;
}
  
input:checked + i {
    background: #fff;
    margin-right: 20px;
  }
  
input:hover {
    cursor: pointer;
  }
  
.option-input {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  appearance: none;
  position: relative;
  top: 13.33333px;
  right: 0;
  bottom: 0;
  left: 0;
  height: 40px;
  width: 40px;
  transition: all 0.15s ease-out 0s;
  background: #cbd1d8;
  border: none;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  margin-right: 0.5rem;
  outline: none;
  position: relative;
  z-index: 1000;
}
.option-input:hover {
  background: #9faab7;
}
.option-input:checked {
  background: #838A93;
}
.option-input:checked::before {
  height: 40px;
  width: 40px;
  position: absolute;
  content: '✔';
  display: inline-block;
  font-size: 26.66667px;
  text-align: center;
  line-height: 40px;
}
.option-input:checked::after {
  -webkit-animation: click-wave 0.65s;
  -moz-animation: click-wave 0.65s;
  animation: click-wave 0.65s;
  background: #40e0d0;
  content: '';
  display: block;
  position: relative;
  z-index: 100;
}

</style>