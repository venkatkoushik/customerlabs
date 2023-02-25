import axios from "axios";
import Config from "../../src/config";
import { v4 as uuid } from "uuid";
export const Axios = (params) => {
  return new Promise((resolve, reject) => {
    axios(params)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
//create Roles

//insert document to arango
export const upsertDocument = (params) => {
  return new Promise((resolve, reject) => {
    let dataList = {
      db_name: Config.database,
      entity: 'message_catalog',
      is_metadata: false,
      // metadataId: params.metadataId,
      doc: {
        // [params.upsertNameKeyId]: params.upsertNameValue,
        ...params.list,
      },
    };
    if (params.isedit) {
      dataList.filter = {
        [params.keyvalue]: params.id,
      };
    }
    let data = JSON.stringify([dataList]);
    let config = {
      method: "post",
      url: `${Config.arango_api_url}/api/upsert_document`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    Axios(config)
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

//read document from arango database

export const readDocument = (params) => {
  return new Promise((resolve, reject) => {
    let data = {
      db_name: `${Config.database}`,
      entity: `${params.entity}`,
      // filter: `${params.entity}.${params.filterId} == '${params.filterValue}'`,
      return_fields: `{${params.entity}}`,
    };
    
    // if(params.entity === "Person"){
    //   data.return_fields = "Merge(Person, {name: (for n in HumanNameMaster filter Person.name any == n._id return n)},{telecom: (for n in ContactPointMaster filter Person.telecom any == n._id return n)})" 
    // }
   
    // if(params.entity === "PractitionerRole"){
    //   data.return_fields = "{PractitionerRole:MERGE(PractitionerRole,{code:(FOR codab IN TO_ARRAY(PractitionerRole.code) RETURN MERGE(DOCUMENT(codab),{coding:(FOR cod IN DOCUMENT(codab).coding RETURN DOCUMENT(cod))})  )})}"
    // }
    
    if (params?.isfilter) {
      data.filter = `${params.entity}.${params.filterName} == '${params.filterValue}'`;

      // if(params.entity==='PermissionRoleMapping'){
      //   data.filter = `${params.entity}.${params.filterName} == ${params.filterValue}`;

      // } else{
      // data.filter = `${params.entity}.${params.filterName} == '${params.filterValue}'`;
      // }
    }
    let config = {
      method: "post",
      url: `${Config.arango_api_url}/api/read_documents`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    Axios(config)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
};


export const deleteDocument = (params) => {
  return new Promise((resolve, reject) => {
    let data = {
      db_name: `${Config.database}`,
      entity: `${params.entity}`,
      // filter: `${params.entity}.${params.filterId} == '${params.filterValue}'`,
      return_fields: `{${params.entity}}`,
    };
    
    if(typeof(params.id[0]) === 'number'){
      data.filter = `${params.entity}.${[params.keyvalue[0]]}==${params.id[0]}`;

    } else {
      data.filter = `${params.entity}.${[params.keyvalue[0]]}=='${params.id[0]}'`;

    }
    let config = {
      method: "post",
      url: `${Config.arango_api_url}/api/delete_document`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    Axios(config)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
