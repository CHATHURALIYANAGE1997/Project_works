const icons = ["bell"];

icons.forEach(icon => document.body.innerHTML +=
    `<span><i class="icon" data-feather="${icon}"></i><p>${icon}</p></span>`
);
feather.replace();