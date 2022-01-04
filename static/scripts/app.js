


function get_user_files(){
    document.querySelectorAll(".file_input").forEach(function(i){
        const btn_container = i.closest(".btn-container")
        btn_container.addEventListener('click', function(){
            i.click()
        })

        btn_container.addEventListener('dragover', function(e){
            e.preventDefault();
            btn_container.style.border = "5px solid black"
        })

        const types = ["dragleave", "dragend"]
        types.forEach(function(e){
            btn_container.addEventListener(e, function(){
                console.log("done")
                btn_container.style.border = "5px dashed black"
            })
        })

        btn_container.addEventListener("drop", function(e){
            e.preventDefault()
            if (e.dataTransfer.files.length){
                i.files = e.dataTransfer.files;
                let name = i.files[0]["name"]
                const text = btn_container.getElementsByTagName("h1")
                text[0].innerHTML = name
                btn_container.style.border = "5px dashed black"
            }

        })
        
        i.addEventListener('change', function(){
            if (i.files.length){
                let name = i.files[0]["name"]
                const text = btn_container.getElementsByTagName("h1")
                text[0].innerHTML = name
            }
        })
    })
}

function validate_user_files(){
    function check_for_files(){
        let return_value = true

        document.querySelectorAll(".file_input").forEach(function(inputElement){
            if (inputElement.files.length == 0){
                return false
            }
        })

        return return_value
    }

    const submit_btn = document.querySelector(".submit-btn")
    
    submit_btn.addEventListener('click', function(e){ 
        if (check_for_files() == false){
            const btn_containers = document.querySelectorAll(".btn-container")
            btn_containers.forEach(function(btn){
                
                btn.style.border = "5px solid rgb(197, 74, 74)"

            })
            console.log("its bad")
            e.preventDefault()
        }
        else{
            submit_btn.style.border = "none"
            console.log("its good")
        }
    })
}

window.addEventListener('load', function(){
    get_user_files()
    validate_user_files()
    
    
    
})