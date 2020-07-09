let str = "#define GLSLIFY 1\nvarying vec2 vUv;\n\nvoid main()\n{\n    vUv = uv;\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n";

let json = JSON.parse(str);
console.log(jaon);