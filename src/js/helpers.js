/**
 * Retrieve the string URL of a view or directive template
 * @param  {string} filename Name of the html file to retrieve
 * @return {string}          Relative URL to the minified template
 */
function getView (filename){
  return `dist/html/${filename}.min.html`;
}
