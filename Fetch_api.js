
let p=fetch("https://bible-api.com/john%203:16")
p.then((response)=>{
    console.log(response.status)
    console.log(response.ok)
    return response.json()
}).then((value)=>{
    console.log(value)

    let refrence = value.reference;
    let verses = value.verses[0].text;

    let cardContainer1 = document.getElementById("cardContainer1");
    let cardHTML = `
    <div class="card mx-auto" style="width: 18rem;background-color:black;color:white">
        <img src="BIBLE1.webp" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${refrence}</h5>
            <p class="card-text">${verses}</p>
            <a href="https://bible-api.com/john%203:16" class="btn btn-primary"> JOHN 3:16</a>
        </div>
    </div>
`;
    cardContainer1.innerHTML=cardHTML;
})

let p2=fetch("https://bible-api.com/romans+12:1-2")
p2.then((response)=>{
    console.log(response.status)
    console.log(response.ok)
    return response.json()
}).then((value)=>{
    console.log(value)

    let reference = value.reference;
    let verses = value.verses[0].text;

    let cardContainer2 = document.getElementById("cardContainer2");
    let cardHTML = `
    <div class="card mx-auto" style="width: 18rem;margin-top:20px;background-color:black;color:white">
        <img src="BIBLE_2.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${reference}</h5>
            <p class="card-text">${verses}</p>
            <a href="https://bible-api.com/romans+12:1-2" class="btn btn-primary">ROMANS 12</a>
        </div>
    </div>
`;
    cardContainer2.innerHTML=cardHTML;
})

