export const copyTableToClipboard = (divID, reportName) => {
  var aux = document.createElement("div");
  aux.setAttribute("contentEditable", true);
  aux.innerHTML = document.getElementById(divID).innerHTML;
  aux.setAttribute("onfocus", "document.execCommand('selectAll',false,null)");
  document.body.appendChild(aux);
  aux.focus();
  document.execCommand("copy");
  document.body.removeChild(aux);
  alert(`Report ${reportName} Copied to Clipboard \n Try Pasting into a Word Document` )
};