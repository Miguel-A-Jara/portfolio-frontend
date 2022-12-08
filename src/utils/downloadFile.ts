const downloadFile = (fileURL: string, fileName: string | undefined, fileExtension: string) => {

  fetch(fileURL)
  .then(response => {
    response.blob().then(blob => {
        // Creating new object of PDF file
        const fileLink = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileLink;
        alink.download = `${fileName}${fileExtension}`;
        alink.click();
    })
  })

};

export default downloadFile;