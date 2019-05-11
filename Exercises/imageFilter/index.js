/* 
  Build a function that will take an array of filenames (as string) and return an array of array. Each array will provide 3 informations about the image file: the full filename, its name and the extension. (See the example below)

Detect the image files based on the end of the filename which is their format (extension).
Image files are defined as jpg, gif, png, tiff, svg and bmp. So "puppies.jpg" is a image file while "puppies.html" is not.

For example:
Input: ["imgName.extension", "notAnImg"]
Output: [["imgName.extension", "imgName", "extension"], null]

So:
imageFilter(["index.html", "favicon.gif"])
return [null, ["favicon.gif", "favicon", "gif"]]

!Non Case Sensitive, so a file with the extension .jpg or .JPG is still an image.
*/

function imageFilter(arr) {
  var images = arr.map(function(image) {
    var el = image.toLowerCase()
    if (image.startsWith(".")) { // Check if file has a name and an extension
      return null;
    } else if (el.endsWith(".jpg") || el.endsWith(".gif") || el.endsWith(".png") || el.endsWith(".tiff") || el.endsWith("svg") || el.endsWith("bmp")) {
      return [image, image.substr(0, image.indexOf(".")), image.substr(image.indexOf(".") + 1)];
    } else {
      return null;
    }
  });
  return images;
}
