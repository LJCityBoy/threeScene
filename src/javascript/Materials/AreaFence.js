import * as THREE from 'three'

import shaderFragment from '../../shaders/areaFence/fragment.js'
import shaderVertex from '../../shaders/areaFence/vertex.js'

export default function()
{
    const uniforms = {
        uTime: { value: null },
        uBorderAlpha: { value: null },
        uStrikeAlpha: { value: null }
    }

    const material = new THREE.ShaderMaterial({
        wireframe: false,
        transparent: true,
        side: THREE.DoubleSide,
        depthTest: true,
        depthWrite: false,
        uniforms,
        vertexShader: shaderVertex,
        fragmentShader: shaderFragment
    })

    return material
}
