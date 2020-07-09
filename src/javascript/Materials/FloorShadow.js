import * as THREE from 'three'

import shaderFragment from '../../shaders/floorShadow/fragment.js'
import shaderVertex from '../../shaders/floorShadow/vertex.js'

export default function () {
    const uniforms = {
        tShadow: { value: null },
        uShadowColor: { value: null },
        uAlpha: { value: null }
    }

    const material = new THREE.ShaderMaterial({
        wireframe: false,
        transparent: true,
        uniforms,
        vertexShader: shaderVertex,
        fragmentShader: shaderFragment
    })

    return material
}
