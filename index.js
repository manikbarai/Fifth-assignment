// declare function

function getTextValue(element){
    let num = document.getElementById(element).innerText
    return num
}

// Increment function

function countIncrement(element , increment){
    let count = document.getElementById(element)
    count.innerText = parseInt(count.innerText) + increment
}

// decrement function

function countDecrement(element , decrement){
    let count = document.getElementById(element)
    count.innerText = Math.max(0, parseInt(count.innerText) - decrement)
}


// love function

const love =  document.querySelectorAll('.fa-heart');
love.forEach(love =>{
    love.style.cursor = 'pointer';
    love.addEventListener('click',function(e){
        countIncrement('love' , 1)
    })
})

// copy Counter

function copyContent(title ,number){
    navigator.clipboard.writeText(number).then(function(){
        let copyCounter = getTextValue('copy')
        copyCounter = countIncrement('copy', 1)
        alert('📄'+ title + ' এর নম্বর কপি হয়েছে' + " : " +number)
    }, function(err){
        console.error('Could not copy : ' , err)
    })
}


// Call Function

function callNumber(title, number){
    let coins = getTextValue('coins')

    if(coins < 20){
        alert('❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।')
        return;
    }
    countDecrement('coins', 20);
    callHistory(title ,number);
    alert('📞'+ title + ' এর জন্য কল করা হচ্ছে ' + " : " +number)
}

// call history  FUnction

function callHistory(title , number){
    const listOfHistory = document.getElementById('call-history')
    const createElement = document.createElement('div')
    const time = new Date().toLocaleTimeString();
    createElement.className = 'call-entry flex flex-row justify-between items-center mt-5 p-5 bg-gray-100 rounded-xl'
    createElement.innerHTML = `
        <div><span class="font-bold text-xl">${title}</span><br/>
        <span class="text-left text-gray-600">${number}</span>
        </div>
        <div class="text-gray-800">
            ${time}
        </div>
    `
    listOfHistory.appendChild(createElement)
}

// History Clear Function

function clearHistory(){
    const listOfHistory = document.getElementById('call-history') 
    for(let i = listOfHistory.children.length -1 ; i >=0; i--){
        let child = listOfHistory.children[i];
        if(child.classList.contains('call-entry')){
            listOfHistory.removeChild(child);
        }
    }
    alert('📞🗑️ call history মুছে ফেলা হচ্ছে।');
}

