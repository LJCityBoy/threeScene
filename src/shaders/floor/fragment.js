module.exports =
`#define GLSLIFY 1
uniform sampler2D tBackground;

varying vec2 vUv;

void main()
{
 vec4 backgroundColor=texture2D(tBackground,vUv);

 gl_FragColor=backgroundColor;
}
`;