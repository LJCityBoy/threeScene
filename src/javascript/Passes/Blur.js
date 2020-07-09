import shaderFragment from '../../shaders/blur/fragment.js'
import shaderVertex from '../../shaders/blur/vertex.js'

export default {
    uniforms:
    {
        tDiffuse: { type: 't', value: null },
        uResolution: { type: 'v2', value: null },
        uStrength: { type: 'v2', value: null }
    },
    vertexShader: shaderVertex,
    fragmentShader: shaderFragment
}
