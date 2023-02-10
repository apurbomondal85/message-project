
const messageArea = document.getElementById('message-area');

const messageSend1 = document.getElementById('message-send1').addEventListener('click', () =>{
    const messageBox1 = document.getElementById('message-field1');
    let box1Value = messageBox1.value;

    const div = document.createElement('div');
    div.innerHTML = ` 
    <div class = "mb-4">
    <div class="flex gap-4">
        <div class="flex justify-center items-end">
            <img src="images/person1.jpg" class="w-8 h-8 ring-2 ring-green-500 ring-offset-2 rounded-full" alt="">
        </div>
        <div class="p-4 bg-white inline-block rounded-3xl">
            <p class="text-base font-normal inline">${box1Value}</p>
        </div>
    </div>
    </div>

    `;
    messageArea.appendChild(div)
    messageBox1.value = '';
});

const messageSend2 = document.getElementById('message-send2').addEventListener('click',() =>{
    const messageBox2 = document.getElementById('message-field2');
    let box2Value = messageBox2.value;

    const div = document.createElement('div');
    div.innerHTML = ` 
    <div class="flex justify-end items-center mb-4">
        <div class="flex gap-4">
            <div class="p-4 bg-white inline-block rounded-3xl">
                <p class="text-base font-normal inline">${box2Value}</p>
            </div>
            <div class="flex justify-center items-end">
                <img src="images/person2.png" class="w-8 h-8 ring-2 ring-green-500 ring-offset-2 rounded-full" alt="">
            </div>
        </div>
    </div>

    `;
    messageArea.appendChild(div)
    messageBox2.value = '';
});


