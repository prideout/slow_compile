const vshader = `#version 300 es
struct PerRenderableData
{
    mat4 worldFromModelMatrix;
    mat3 worldFromModelNormalMatrix;
    uint morphTargetCount;
    uint flagsChannels;
    uint objectId;
    float userData;
    vec4 reserved[8];
};

layout(std140) uniform ObjectUniforms
{
    PerRenderableData a[127]; // ** SLOW
} objectUniforms;

layout(location = 0) in vec4 mesh_position;
layout(location = 2) in vec4 mesh_color;

flat out int instance_index;
out mediump vec4 vertex_color;
out vec4 vertex_worldPosition;

void main()
{
    instance_index = gl_InstanceID;
    vec4 _292 = (objectUniforms.a[0].worldFromModelMatrix[0] * mesh_position.x) + ((objectUniforms.a[0].worldFromModelMatrix[1] * mesh_position.y) + ((objectUniforms.a[0].worldFromModelMatrix[2] * mesh_position.z) + objectUniforms.a[0].worldFromModelMatrix[3]));
    vertex_color = mesh_color;
    vertex_worldPosition.x = _292.x;
    vertex_worldPosition.y = _292.y;
    vertex_worldPosition.z = _292.z;
    gl_Position =  _292;
}
`;