let promise = new Promise((resolve, reject) => {

    console.log("order food")

    setTimeout(() => {

        let deliveryAvailable = true

        if (deliveryAvailable) {
            resolve("food is ready")
        } else {
            reject("no delivery")
        }

    }, 6000)

})

promise
  .then(result => console.log(result))
  .catch(error => console.log(error))