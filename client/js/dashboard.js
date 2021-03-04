window.addEventListener('load', function(e){
    const departments = "http://localhost:5000/api/departments"
    const training = "http://localhost:5000/api/departments/name/training"

    // department list json
    fetch(departments)
        .then(req => req.json())
        .then(result = console.log(result))
        .catch(error=console.log(error))
    // department employees list json
    fetch(training)
        .then(req => req.json())
        .then(result = console.log(result))
        .catch(error=console.log(error))
        
})
