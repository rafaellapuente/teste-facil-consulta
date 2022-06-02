<template>
  <router-view />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Comfortaa&family=Open+Sans&display=swap");
* {
  box-sizing: border-box;
  letter-spacing: 1px;
  font-family: "Open Sans", sans-serif;
}
body {
  background: #ffe766;
}
.body {
  display: flex;
  flex-direction: column;
  background: #ffffff;
  max-width: 1000px;
  height: auto;
  margin: 100px auto;
  box-shadow: 0px 3px 10px #8a8a8a;
  border-radius: 25px;
  padding-top: 50px;
  padding-bottom: 50px;
  padding-left: 100px;
}
.voltar {
  position: relative;
  bottom: 110px;
  right: 95px;
}
#out {
  text-decoration: none;
  font-size: 25px;
  font-weight: bold;
  width: 100%;
}
.label-type1 {
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  margin-bottom: 20px;
}
.label-type2 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
}
.title,
#button1,
#loading-num,
#out,
#edit,
#button2 {
  font-family: "Comfortaa", cursive;
  color: #483698;
}
.title {
  font-size: 45px;
}
.sub-title {
  font-family: "Open Sans", sans-serif;
}
.area-form {
  display: flex;
  flex-direction: row;
}
.left-side {
  width: 50%;
  font-size: 14px;
}
.left-side input,
select,
#button1 {
  height: 35px;
  border-radius: 5px;
  border: 1px solid #483698;
  outline: none;
  padding: 5px 15px;
  margin-top: 10px;
}
#name {
  width: 100%;
}
.min {
  width: 70%;
}
.right-side {
  padding-left: 20px;
}
.right-side img {
  width: 100%;
}
.area-select {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.area-load {
  display: flex;
  flex-direction: row;
  width: 100%;
}
#loading,
#loading2 {
  width: 70%;
  height: 25px;
  background: linear-gradient(90deg, #483698 50%, #f9f9f9 50%);
  border-radius: 5px;
  margin-top: 30px;
}
#loading2 {
  background: #483698;
}
#loading-num {
  display: flex;
  align-items: center;
  justify-content: right;
  flex: 1;
  font-size: 20px;
  color: #483698;
  font-weight: bold;
  margin-top: 30px;
}
#button1 {
  width: 100%;
  background: #483698;
  color: #ffffff;
  border-radius: 12px;
  font-size: 15px;
  font-weight: bold;
  height: 40px;
  margin-top: 20px;
  text-transform: uppercase;
  cursor: pointer;
}
#button2 {
  width: 100%;
  background: #fbde40;
  color: #282828;
  border-radius: 15px;
  font-size: 15px;
  font-weight: bold;
  height: 40px;
  margin-top: 20px;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
}
.error {
  color: #dc3545;
  font-weight: 400;
  margin: 0;
  margin-top: 5px;
  font-size: 12px;
}
/* Paágina 2 */
.pag {
  background: #f9f9f9;
  box-shadow: 0px 2px 5px #b9b9b9;
  display: flex;
  align-items: center;
  padding: 5px 15px;
  border-radius: 5px;
  margin: 10px 0px;
  font-weight: bold;
}
#colu {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.pag input {
  margin: 0px;
  margin-left: 30px;
  margin-right: 45px;
}
#tipo {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
#formas {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  margin-left: 90px;
}
#formas p {
  font-weight: 400;
}
#formas input {
  margin: 0px;
  margin-right: 10px;
}
@media only screen and (max-width: 420px) {
  body{
    padding: 0px;
    margin: 0px;
  }
  .body {
    margin: 100px auto;
    margin-bottom: 0px;
    width: 100vw;
    padding: 35px 20px;
    box-shadow: none;
    border-end-end-radius: 0px;
    border-end-start-radius: 0px;
  }
  .title {
    font-size: 29px;
  }
  .sub-title {
    font-size: 23px;
  }
  .left-side {
    width: 100%;
  }
  .label-type2 {
    gap: 20px;
  }
  .select1{
    width: 100%;
    letter-spacing: -1px;
  }
  .select2{
    width: 100%;
    letter-spacing: 0.2px;
  }
  .right-side {
    display: none;
  }
  .voltar {
  bottom: 100px;
  right: 0px;
}
}
</style>
