import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['dcbd92618744931099507738dabb3536'],
    name: 'TestSI',
    script: Now.include('./sys_script_include_dcbd92618744931099507738dabb3536.server.js'),
    apiName: 'x_snc_daniels_ro_0.TestSI',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    active: true,
    protectionPolicy: 'read',
})
