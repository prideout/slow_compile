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
layout(std140) uniform FrameUniforms
{
mat4 a;
mat4 b;
mat4 c;
mat4 d;
mat4 e;
mat4 f;
mediump vec2 g;
float h;
float i;
vec4 j;
vec2 k;
vec2 l;
vec4 m;
mediump float n;
mediump float o;
mediump float p;
mediump float q;
vec3 r;
float s;
mediump vec3 t;
float u;
mediump float v;
float w;
mediump float x;
mediump float y;
mediump float z;
mediump float az;
mediump float bz;
mediump float cz;
mediump vec4 dz;
mediump uvec3 ez;
mediump uint fz;
mediump vec2 gz;
mediump float hz;
mediump float iz;
mediump vec3 jz[9];
mediump vec3 kz;
mediump float lz;
mediump vec4 mz;
mediump vec4 nz;
mediump vec2 oz;
mediump uint pz;
mediump float qz;
vec4 rz;
mediump uint sz;
mediump float tz;
mediump float uz;
mediump float vz;
mat4 wz[4];
mediump float xz;
mediump float yz;
mediump float zz;
mediump uint azz;
mediump float bzz;
mediump float czz;
mediump float dzz;
mediump float ezz;
mediump vec3 fzz;
mediump float gzz;
mediump float hzz;
mediump float izz;
mediump float jzz;
mediump float kzz;
mat4 lzz;
mat4 mzz;
mediump float nzz;
mediump float ozz;
mediump float pzz;
mediump float qzz;
mediump vec4 rzz[48];
} frameUniforms;
layout(std140) uniform ObjectUniforms
{
PerRenderableData a[63];
} objectUniforms;
layout(location = 0) in vec4 mesh_position;
layout(location = 2) in vec4 mesh_color;
flat out int instance_index;
out mediump vec4 vertex_color;
out vec4 vertex_worldPosition;
out vec4 vertex_position;
void main()
{
instance_index = gl_InstanceID;
vec4 _292 = (objectUniforms.a[0].worldFromModelMatrix[0] * mesh_position.x) + ((objectUniforms.a[0].worldFromModelMatrix[1] * mesh_position.y) + ((objectUniforms.a[0].worldFromModelMatrix[2] * mesh_position.z) + objectUniforms.a[0].worldFromModelMatrix[3]));
vertex_color = mesh_color;
vertex_worldPosition.x = _292.x;
vertex_worldPosition.y = _292.y;
vertex_worldPosition.z = _292.z;
gl_Position = frameUniforms.e * _292;
vertex_position = gl_Position;
gl_Position.z = dot(gl_Position.zw, frameUniforms.g);
}
`;