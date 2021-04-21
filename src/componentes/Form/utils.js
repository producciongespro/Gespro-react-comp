

exports.sendFormData = async  (url, items) => {
    const formData = new FormData();
  
    for (let index = 0; index < items.length; index++) {
      formData.append(items[index].name, items[index].val);
      console.log("items[index].name", items[index].name);
      console.log("items[index].val", items[index].val);
    }
  
    const resp = await fetch(url, {
      method: "POST",
      body: formData,
    });
    let json = await resp.json();
    return json;
  };