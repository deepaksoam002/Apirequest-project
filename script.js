let requesturl;
     const form = document.querySelector('form')
     let profile = document.querySelector('.profile')
     form.addEventListener('submit',(e)=>{
       e.preventDefault();
       let username = document.querySelector('.username').value
       requesturl=`https://api.github.com/users/${username}`
      let profilelink = `https://github.com/${username}`
       
    if(!username){
        profile.innerHTML =`<span class= 'message'>Please! enter a username<span> `
    }else{
// api data reciving part start here
        const xhr = new XMLHttpRequest();
        xhr.open('get',requesturl)
        xhr.onreadystatechange=function(){
            if(xhr.readyState=== 4){
                if(xhr.status=== 200){
                const data = JSON.parse(xhr.responseText)
                profile.innerHTML =` <div class="profile-box">
        <div class="photo">
            <img src="${data.avatar_url}" alt="Profile Photo">
        </div>
                <div class="details">
            <h2 class="name">${data.name ? data.name : 'Not available'}</h2>
            <p class="email">Email_ID: <span>${data.email ? data.email : 'Not available'}</span></p>
             <p class="location">Location: <span>${data.location ? data.location : 'Not available'}</span></p>
            <p class="followers">Followers: <span>${data.followers}</span></p>
            <p class="following">Following: <span>${data.following}</span></p>
            <p class="public_repos">Public_Repos: <span>${data.public_repos}</span></p>
             <a href="${profilelink}" target="_blank" class="link" >GitHub profile link</a>
             </div>`
           }if (xhr.status=== 404){
            profile.innerHTML =`<span class= 'message'>User not found,Please! enter a valid username<span>`
              }}
        }
        xhr.send()
    }})
    
