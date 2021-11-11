const linksSocialMedia = {
  github: 'brunovperg',
  youtube: 'k1shybr05',
  linkedin: 'in/bruno-pergentino/',
  instagram: 'brunoviannap',
  twitter: 'huehue'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`

    // alert(li.children[0].href)
  }
}

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
changeSocialMediaLinks()
getGitHubProfileInfos()
