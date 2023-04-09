//firstly i made the complete, fail functions that will inject a tag that will either say it worked or it failed
function complete(response) {
    let first_axios_div = document.getElementById(`first`)
    first_axios_div.insertAdjacentHTML(`beforeend`, `<p> you did it </p>`)
}
function fail(response) {
    let first_axios_div = document.getElementById(`first`)
    first_axios_div.insertAdjacentHTML(`beforeend`, `<p> something went wrong </p>`)
}
//for the function i grab the axios url and tell it what methode, in this case its a POST, which will make a "username" and give it a value
function first_axios(details) {
    axios.request({
        url: `https://jsonplaceholder.typicode.com/posts`,
        methode: `POST`,
        data: {
            userId: user_val
        }
    }).then(complete).catch(fail)
}
//then i define variables for the button and the input box
let user_inp = document.getElementById(`inp_1`)
let user_val = user_inp[`value`]
let send_but = document.getElementById(`send_btn`)
send_but.addEventListener(`click`, first_axios)
//i then make the next group of success , and fail functions that add their respective information
function patch_complete(response) {
    let second_axios_div = document.getElementById(`second`)
    second_axios_div[`innerHTML`] = `your username has been updated`
}
function patch_fail(response) {
    let second_axios_div = document.getElementById(`second`)
    second_axios_div[`innerHTML`] = `something went wrong when trying to retrieve your patch`
}
//i again grab the axios and its url, i give it the patch methode, with the same data username, except thsi time i give it a new value
function patch_req(details) {
    axios.request({
        url: `https://jsonplaceholder.typicode.com/posts/1`,
        //im confused in these parts, its hard for me to tell if it gets made, cause in order to see it in the de bugger you have to type something but if i type something ill have to restart to see it in whcih deletes to message i sent, but i think im close to making this work
        methode: `PATCH`,
        params: {
            1: user_val
        }
    }).then(patch_complete).catch(patch_fail)
}
//i define the button for this and add the event listener
let update = document.getElementById(`button_1`)
update.addEventListener(`click`, patch_complete)
//i make another dcomplte , fail function that just injects more tags
function delete_complete(response) {
    let third_axios_div = document.getElementById(`third`)
    third_axios_div[`innerHTML`] = `your username has been deleted`
}
function delete_fail(response) {
    let third_axios_div = document.getElementById(`third`)
    third_axios_div[`innerHTML`] = `something went wrong when trying to delete your patch`
}
//i do a new axios function with the "delete" methode and delete the username
function delete_req(details) {
    axios.request({
        url: `https://jsonplaceholder.typicode.com/posts/1`,
        methode: `DELETE`,
        params: {
            1: user_val
        }
    }).then(delete_complete).catch(delete_fail)
}
//i define the button and give it an event listener
let delete_btn = document.getElementById(`button_2`)
delete_btn.addEventListener(`click`, delete_complete)
//i make the last axios request
axios.request({
    url: `https://jsonplaceholder.typicode.com/posts`,
}).then(request_complete).catch(request_fail)
//i make the last complete , fail functions that will add their respective html in
function request_complete(response) {
    //i made a for loop to go through all the response data
    for (let i = 0; i < response[`data`].length; i++) {
        //i define the div that i want the new tags to be put into
        let fourth_axios_div = document.getElementById(`fourth`)
        fourth_axios_div.insertAdjacentHTML(`beforeend`, `<div>
        <p> ${response[`data`][i][`userId`]} </p>
        <p> ${response[`data`][i][`id`]} </p>
        <p> ${response[`data`][i][`title`]} </p>
        <p> ${response[`data`][i][`body`]} </p>
        </div>`)
    }
}
function request_fail(response) {
    let fourth_axios_div = document.getElementById(`fourth`)
    fourth_axios_div[`innerHTML`] = `something went wrong when trying to delete your patch`
}

//im confused in these parts, its hard for me to tell if it gets made, cause in order 
//to see it in the de bugger you have to type something but if i type something ill 
//have to restart to see it in whcih deletes to message i sent, but i think im close 
//to making this work