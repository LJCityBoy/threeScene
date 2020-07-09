module.exports = 
`#define GLSLIFY 1
uniform sampler2D tDiffuse;
uniform vec2 uPosition;
uniform float uRadius;
uniform vec3 uColor;
uniform float uAlpha;

varying vec2 vUv;

void main()
{
 vec4 diffuseColor=texture2D(tDiffuse,vUv);

 float glowStrength=distance(vUv,uPosition)/uRadius;
 glowStrength=1.-glowStrength;
 glowStrength*=uAlpha;
 glowStrength=clamp(glowStrength,0.,1.);
 vec3 color=mix(diffuseColor.rgb,uColor,glowStrength);

 gl_FragColor=vec4(color,1.);
}
`;