/**
 * Created on 2017/5/6.
 * @fileoverview 请填写简要的文件说明.
 * @author joc (Chen Wen)
 */
import {ServiceConfiguration} from 'meteor/service-configuration';

class Service {
    constructor (serviceName) {
        this.serviceName = serviceName;
    }

    getConfigs (fields) {
        return ServiceConfiguration.configurations.findOne({service: this.serviceName}, {fields});
    }
}

export default Service;
