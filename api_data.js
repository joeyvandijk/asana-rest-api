define({ api: [
  {
    "version": "0.6.0",
    "type": "post",
    "url": "api.attachment.create();",
    "title": "{}.create",
    "name": "create",
    "description": "<p>Upload a file as an attachment to a task.</p>",
    "group": "Attachment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "field": "id",
            "optional": false,
            "description": "<p>Task identifier.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "field": "object",
            "optional": false,
            "description": "<p>Options object.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "object.file",
            "optional": false,
            "description": "<p>File path to upload.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "field": "object.fields",
            "optional": true,
            "description": "<p>Override default return fields : <em>[&#39;name&#39;]</em></p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Streaming example:",
        "content": "api.attachment.create(1234567890,{file:'./file1.png'}).on('readable',function(){\n  console.log('Data:',this.read());\n}).on('end',function(){\n  console.log('Response received.');\n}).on('error',function(err){\n  console.log('An error occurred: ',err);\n});\n"
      },
      {
        "title": "Callback example:",
        "content": "api.attachment.create(1234567890,{file:'./file1.png'},function(err,data){\n    if(err){\n        console.log('An error occurred:',err);\n    }else{\n        console.log('Data:',data);\n    }\n});\n"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "field": "attachment",
            "optional": false,
            "description": "<p>Attachment information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "attachment.id",
            "optional": false,
            "description": "<p>Attachment identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "attachment.name",
            "optional": false,
            "description": "<p>Name of the file.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": 2345678901,\n     \"name\": \"file1.png\"\n   }\n"
        }
      ]
    },
    "filename": "lib/api/attachment.js"
  },
  {
    "version": "0.6.0",
    "type": "get",
    "url": "api.attachment.id();",
    "title": "{}.id",
    "name": "id",
    "description": "<p>Retrieve a single attachment.</p>",
    "group": "Attachment",
    "groupDescription": "<p>An attachment object represents any file attached to a task in Asana.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "field": "id",
            "optional": false,
            "description": "<p>Attachment identifier.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "field": "object",
            "optional": true,
            "description": "<p>Options object.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "field": "object.fields",
            "optional": true,
            "description": "<p>Override default return fields : <em>[&#39;created_at&#39;,&#39;download_url&#39;,&#39;host&#39;,&#39;name&#39;,&#39;parent&#39;,&#39;view_url&#39;]</em></p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Streaming example:",
        "content": "api.attachment.id(1234567890).on('readable',function(){\n  console.log('Data:',this.read());\n}).on('end',function(){\n  console.log('Response received.');\n}).on('error',function(err){\n  console.log('An error occurred: ',err);\n});\n"
      },
      {
        "title": "Callback example:",
        "content": "api.attachment.id(1234567890,function(err,data){\n    if(err){\n        console.log('An error occurred:',err);\n    }else{\n        console.log('Data:',data);\n    }\n});\n"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "field": "attachment",
            "optional": false,
            "description": "<p>Attachment information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "attachment.id",
            "optional": false,
            "description": "<p>Unique identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "attachment.name",
            "optional": false,
            "description": "<p>Name of the file.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "attachment.created_at",
            "optional": false,
            "description": "<p>Date created field.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "attachment.download_url",
            "optional": false,
            "description": "<p>The URL containing the content of the file. Due to processing don&#39;t persist this URL in your code, while it may change after it is processed.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "attachment.host",
            "optional": false,
            "description": "<p>Which service is hosting the file: <code>asana</code>, <code>dropbox</code>, <code>gdrive</code> or <code>box</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "attachment.parent",
            "optional": false,
            "description": "<p>The parent task of the file.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "attachment.parent.id",
            "optional": false,
            "description": "<p>Task identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "attachment.view_url",
            "optional": false,
            "description": "<p>The URL where the file can be viewed. Browser optimized and not just a download URL.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": 2345678901,\n     \"name\": \"File1.png\",\n     \"created_at\": \"2012-02-22T02:04:58.147Z\",\n     \"download_url\": \"https://www.dropbox.com/s/123/File1.png?dl=1\",\n     \"host\": \"dropbox\",\n     \"parent\": [ { id:4567890123 } ],\n     \"view_url\": \"https://www.dropbox.com/s/123/File1.png\",\n   }\n"
        }
      ]
    },
    "filename": "lib/api/attachment.js"
  },
  {
    "version": "0.6.0",
    "type": "get",
    "url": "api.attachment.list();",
    "title": "{}.list / api.attachments / api.task.attachments",
    "name": "list",
    "description": "<p>Retrieve a list of (filtered) attachments with a single task.</p>",
    "group": "Attachment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "field": "id",
            "optional": false,
            "description": "<p>Task identifier to see all connected attachments.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "field": "object",
            "optional": true,
            "description": "<p>Options object.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "field": "object.fields",
            "optional": true,
            "description": "<p>Override default return fields : <em>[&#39;created_at&#39;,&#39;download_url&#39;,&#39;host&#39;,&#39;name&#39;,&#39;parent&#39;,&#39;view_url&#39;]</em></p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Streaming example:",
        "content": "api.attachment.list(1234567890).on('readable',function(){\n  console.log('Data:',this.read());\n}).on('end',function(){\n  console.log('Response received.');\n}).on('error',function(err){\n  console.log('An error occurred: ',err);\n});\n"
      },
      {
        "title": "Callback example:",
        "content": "api.attachment.list(1234567890,function(err,data){\n    if(err){\n        console.log('An error occurred:',err);\n    }else{\n        console.log('Data:',data);\n    }\n});\n"
      }
    ],
    "success": {
      "fields": {
        "Success response objects ~ Array/Event": [
          {
            "group": "response",
            "type": "Object",
            "field": "attachment",
            "optional": false,
            "description": "<p>Attachment information.</p>"
          },
          {
            "group": "response",
            "type": "Number",
            "field": "attachment.id",
            "optional": false,
            "description": "<p>Unique identifier.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "attachment.name",
            "optional": false,
            "description": "<p>Name of the file.</p>"
          },
          {
            "group": "response",
            "type": "Date",
            "field": "attachment.created_at",
            "optional": false,
            "description": "<p>Date created field.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "attachment.download_url",
            "optional": false,
            "description": "<p>The URL containing the content of the file. Due to processing don&#39;t persist this URL in your code, while it may change after it is processed.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "attachment.host",
            "optional": false,
            "description": "<p>Which service is hosting the file: <code>asana</code>, <code>dropbox</code>, <code>gdrive</code> or <code>box</code>.</p>"
          },
          {
            "group": "response",
            "type": "Object",
            "field": "attachment.parent",
            "optional": false,
            "description": "<p>The parent task of the file.</p>"
          },
          {
            "group": "response",
            "type": "Number",
            "field": "attachment.parent.id",
            "optional": false,
            "description": "<p>Task identifier.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "attachment.view_url",
            "optional": false,
            "description": "<p>The URL where the file can be viewed. Browser optimized and not just a download URL.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   [{\n     \"id\": 2345678901,\n     \"name\": \"File1.png\",\n     \"created_at\": \"2012-02-22T02:04:58.147Z\",\n     \"download_url\": \"https://www.dropbox.com/s/123/File1.png?dl=1\",\n     \"host\": \"dropbox\",\n     \"parent\": [ { id:4567890123 } ],\n     \"view_url\": \"https://www.dropbox.com/s/123/File1.png\",\n   }]\n"
        }
      ]
    },
    "filename": "lib/api/attachment.js"
  },
  {
    "version": "0.6.0",
    "type": "post",
    "url": "api.project.create();",
    "title": "{}.create",
    "name": "create",
    "description": "<p>Create a project.</p>",
    "group": "Project",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "field": "object",
            "optional": false,
            "description": "<p>Options object.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "field": "object.archived",
            "optional": true,
            "description": "<p>Project is archived or not.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "object.name",
            "optional": true,
            "description": "<p>Title of the project.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "object.color",
            "optional": true,
            "description": "<p>Color code the project with <em>dark-pink, dark-green, dark-blue, dark-red, dark-teal, dark-brown, dark-orange, dark-purple, dark-warm-gray, light-pink, light-green, light-blue, light-red, light-teal, light-yellow, light-orange, light-purple, light-warm-gray</em>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "object.notes",
            "optional": true,
            "description": "<p>Description of the project field.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "object.workspace",
            "optional": false,
            "description": "<p>Workspace identifier to connect project with.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "object.team",
            "optional": true,
            "description": "<p>If workspace is an organization provide the team identifier which is connected to this project.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "field": "object.fields",
            "optional": true,
            "description": "<p>Override default return fields : <em>[&#39;archived&#39;,&#39;created_at&#39;,&#39;followers&#39;,&#39;modified_at&#39;,&#39;name&#39;,&#39;color&#39;,&#39;notes&#39;,&#39;workspace&#39;,&#39;team&#39;]</em></p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Streaming example:",
        "content": "api.project.create({archived:false,name:'Project2',color:'light-orange',notes:'some information about this project',workspace:912345678}).on('readable',function(){\n  console.log('Data:',this.read());\n}).on('end',function(){\n  console.log('Response received.');\n}).on('error',function(err){\n  console.log('An error occurred: ',err);\n});\n"
      },
      {
        "title": "Callback example:",
        "content": "api.project.create({archived:false,name:'Project2',color:'light-orange',notes:'some information about this project',workspace:912345678},function(err,data){\n    if(err){\n        console.log('An error occurred:',err);\n    }else{\n        console.log('Data:',data);\n    }\n});\n"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "field": "project",
            "optional": false,
            "description": "<p>Project information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "project.id",
            "optional": false,
            "description": "<p>Unique identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "project.name",
            "optional": false,
            "description": "<p>Title field.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "project.created_at",
            "optional": false,
            "description": "<p>Date created field.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "project.modified_at",
            "optional": false,
            "description": "<p>Last modified date field.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "project.notes",
            "optional": false,
            "description": "<p>Description field.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "field": "project.archived",
            "optional": false,
            "description": "<p>If archived (not visible anymore).</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "project.workspace",
            "optional": false,
            "description": "<p>Which workspace this project is connected to.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "project.workspace.id",
            "optional": false,
            "description": "<p>Connected workspace identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "project.team",
            "optional": false,
            "description": "<p>Which team this project is connected to.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "project.team.id",
            "optional": false,
            "description": "<p>Connected team identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "project.color",
            "optional": false,
            "description": "<p>Color that is shown in the GUI like <em>dark-pink, dark-green, dark-blue, dark-red, dark-teal, dark-brown, dark-orange, dark-purple, dark-warm-gray, light-pink, light-green, light-blue, light-red, light-teal, light-yellow, light-orange, light-purple, light-warm-gray</em>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "field": "project.followers",
            "optional": false,
            "description": "<p>List of followers.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "project.followers.id",
            "optional": false,
            "description": "<p>User identifier.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": 2345678901,\n     \"name\": \"Project1\",\n     \"created_at\": \"2012-02-22T02:04:58.147Z\",\n     \"modified_at\": \"2012-02-22T02:06:58.147Z\",\n     \"notes\": \"Description of the project\",\n     \"archived\": false,\n     \"workspace\": { id:3456789012 },\n     \"archived\": \"Team1\",\n     \"color\": \"green\",\n     \"team\": { id:4567890123 },\n     \"followers\":[ { id:5678901234 } ]\n   }\n"
        }
      ]
    },
    "filename": "lib/api/project.js"
  },
  {
    "version": "0.6.0",
    "type": "get",
    "url": "api.project.id();",
    "title": "{}.id",
    "name": "id",
    "description": "<p>Retrieve a single project.</p>",
    "group": "Project",
    "groupDescription": "<p>A project represents a prioritized list of tasks in Asana. It exists in a single workspace or organization and is accessible to a subset of users in that workspace or organization depending on its permissions.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "field": "id",
            "optional": false,
            "description": "<p>Project identifier.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "field": "object",
            "optional": true,
            "description": "<p>Options object.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "field": "object.fields",
            "optional": true,
            "description": "<p>Override default return fields : <em>[&#39;archived&#39;,&#39;created_at&#39;,&#39;followers&#39;,&#39;modified_at&#39;,&#39;name&#39;,&#39;color&#39;,&#39;notes&#39;,&#39;workspace&#39;,&#39;team&#39;]</em></p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Streaming example:",
        "content": "api.project.id(1234567890).on('readable',function(){\n  console.log('Data:',this.read());\n}).on('end',function(){\n  console.log('Response received.');\n}).on('error',function(err){\n  console.log('An error occurred: ',err);\n});\n"
      },
      {
        "title": "Callback example:",
        "content": "api.project.id(1234567890,function(err,data){\n    if(err){\n        console.log('An error occurred:',err);\n    }else{\n        console.log('Data:',data);\n    }\n});\n"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "field": "project",
            "optional": false,
            "description": "<p>Project information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "project.id",
            "optional": false,
            "description": "<p>Unique identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "project.name",
            "optional": false,
            "description": "<p>Title field.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "project.created_at",
            "optional": false,
            "description": "<p>Date created field.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "project.modified_at",
            "optional": false,
            "description": "<p>Last modified date field.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "project.notes",
            "optional": false,
            "description": "<p>Description field.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "field": "project.archived",
            "optional": false,
            "description": "<p>If archived (not visible anymore).</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "project.workspace",
            "optional": false,
            "description": "<p>Which workspace this project is connected to.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "project.workspace.id",
            "optional": false,
            "description": "<p>Connected workspace identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "project.team",
            "optional": false,
            "description": "<p>Which team this project is connected to.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "project.team.id",
            "optional": false,
            "description": "<p>Connected team identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "project.color",
            "optional": false,
            "description": "<p>Color that is shown in the GUI like <em>dark-pink, dark-green, dark-blue, dark-red, dark-teal, dark-brown, dark-orange, dark-purple, dark-warm-gray, light-pink, light-green, light-blue, light-red, light-teal, light-yellow, light-orange, light-purple, light-warm-gray</em>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "field": "project.followers",
            "optional": false,
            "description": "<p>List of followers.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "project.followers.id",
            "optional": false,
            "description": "<p>User identifier.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": 2345678901,\n     \"name\": \"Project1\",\n     \"created_at\": \"2012-02-22T02:04:58.147Z\",\n     \"modified_at\": \"2012-02-22T02:06:58.147Z\",\n     \"notes\": \"Description of the project\",\n     \"archived\": false,\n     \"workspace\": { id:3456789012 },\n     \"archived\": \"Team1\",\n     \"color\": \"green\",\n     \"team\": { id:4567890123 },\n     \"followers\":[ { id:5678901234 } ]\n   }\n"
        }
      ]
    },
    "filename": "lib/api/project.js"
  },
  {
    "version": "0.6.0",
    "type": "get",
    "url": "api.project.list();",
    "title": "{}.list / api.projects",
    "name": "list",
    "description": "<p>Retrieve a list of (filtered) projects.</p>",
    "group": "Project",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "field": "object",
            "optional": true,
            "description": "<p>Options object.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "object.workspace",
            "optional": true,
            "description": "<p>Workspace identifier.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "object.archived",
            "optional": true,
            "description": "<p>If project is archived or not.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "field": "object.fields",
            "optional": true,
            "description": "<p>Override default return fields : <em>[&#39;archived&#39;,&#39;created_at&#39;,&#39;followers&#39;,&#39;modified_at&#39;,&#39;name&#39;,&#39;color&#39;,&#39;notes&#39;,&#39;workspace&#39;,&#39;team&#39;]</em></p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Streaming example:",
        "content": "api.project.list().on('readable',function(){\n  console.log('Data:',this.read());\n}).on('end',function(){\n  console.log('Response received.');\n}).on('error',function(err){\n  console.log('An error occurred: ',err);\n});\n"
      },
      {
        "title": "Streaming workspace example:",
        "content": "api.project.list({workspace:1234567890}).on('readable',function(){\n  console.log('Data:',this.read());\n}).on('end',function(){\n  console.log('Response received.');\n}).on('error',function(err){\n  console.log('An error occurred: ',err);\n});\n"
      },
      {
        "title": "Callback example:",
        "content": "api.project.list(,function(err,data){\n    if(err){\n        console.log('An error occurred:',err);\n    }else{\n        console.log('Data:',data);\n    }\n});\n"
      }
    ],
    "success": {
      "fields": {
        "Success response objects ~ Array/Event": [
          {
            "group": "response",
            "type": "Object",
            "field": "project",
            "optional": false,
            "description": "<p>Project information.</p>"
          },
          {
            "group": "response",
            "type": "Number",
            "field": "project.id",
            "optional": false,
            "description": "<p>Unique identifier.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "project.name",
            "optional": false,
            "description": "<p>Title field.</p>"
          },
          {
            "group": "response",
            "type": "Date",
            "field": "project.created_at",
            "optional": false,
            "description": "<p>Date created field.</p>"
          },
          {
            "group": "response",
            "type": "Date",
            "field": "project.modified_at",
            "optional": false,
            "description": "<p>Last modified date field.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "project.notes",
            "optional": false,
            "description": "<p>Description field.</p>"
          },
          {
            "group": "response",
            "type": "Boolean",
            "field": "project.archived",
            "optional": false,
            "description": "<p>If archived (not visible anymore).</p>"
          },
          {
            "group": "response",
            "type": "Object",
            "field": "project.workspace",
            "optional": false,
            "description": "<p>Which workspace this project is connected to.</p>"
          },
          {
            "group": "response",
            "type": "Number",
            "field": "project.workspace.id",
            "optional": false,
            "description": "<p>Connected workspace identifier.</p>"
          },
          {
            "group": "response",
            "type": "Object",
            "field": "project.team",
            "optional": false,
            "description": "<p>Which team this project is connected to.</p>"
          },
          {
            "group": "response",
            "type": "Number",
            "field": "project.team.id",
            "optional": false,
            "description": "<p>Connected team identifier.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "project.color",
            "optional": false,
            "description": "<p>Color that is shown in the GUI like <em>dark-pink, dark-green, dark-blue, dark-red, dark-teal, dark-brown, dark-orange, dark-purple, dark-warm-gray, light-pink, light-green, light-blue, light-red, light-teal, light-yellow, light-orange, light-purple, light-warm-gray</em>.</p>"
          },
          {
            "group": "response",
            "type": "Object[]",
            "field": "project.followers",
            "optional": false,
            "description": "<p>List of followers.</p>"
          },
          {
            "group": "response",
            "type": "Object",
            "field": "project.followers.id",
            "optional": false,
            "description": "<p>User identifier.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   [{\n     \"id\": 2345678901,\n     \"name\": \"Project1\",\n     \"created_at\": \"2012-02-22T02:04:58.147Z\",\n     \"modified_at\": \"2012-02-22T02:06:58.147Z\",\n     \"notes\": \"Description of the project\",\n     \"archived\": false,\n     \"workspace\": { id:3456789012 },\n     \"archived\": \"Team1\",\n     \"color\": \"green\",\n     \"team\": { id:4567890123 },\n     \"followers\":[ { id:5678901234 } ]\n   }]\n"
        }
      ]
    },
    "filename": "lib/api/project.js"
  },
  {
    "version": "0.6.0",
    "type": "delete",
    "url": "api.project.remove();",
    "title": "{}.remove",
    "name": "remove",
    "description": "<p>Remove a project.</p>",
    "group": "Project",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "field": "id",
            "optional": false,
            "description": "<p>Project identifier.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Streaming example:",
        "content": "api.project.remove(889012345679).on('readable',function(){\n  console.log('Data:',this.read());\n}).on('end',function(){\n  console.log('Response received.');\n}).on('error',function(err){\n  console.log('An error occurred: ',err);\n});\n"
      },
      {
        "title": "Callback example:",
        "content": "api.project.remove(889012345679,function(err,data){\n    if(err){\n        console.log('An error occurred:',err);\n    }else{\n        console.log('Data:',data);\n    }\n});\n"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "field": "object",
            "optional": false,
            "description": "<p>Empty object, so request succeeded.</p>"
          }
        ]
      }
    },
    "filename": "lib/api/project.js"
  },
  {
    "version": "0.6.0",
    "type": "get",
    "url": "api.project.tasks();",
    "title": "{}.tasks",
    "name": "tasks",
    "description": "<p>Retrieve a list of task which is connected with a specific project.</p>",
    "group": "Project",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "field": "id",
            "optional": false,
            "description": "<p>Project identifier.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "field": "object",
            "optional": true,
            "description": "<p>Options object.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "field": "object.fields",
            "optional": true,
            "description": "<p>Override default return fields : <em>[&#39;assignee&#39;, &#39;assignee_status&#39;, &#39;created_at&#39;, &#39;completed&#39;, &#39;completed_at&#39;, &#39;due_on&#39;, &#39;followers&#39;, &#39;hearted&#39;, &#39;hearts&#39;, &#39;modified_at&#39;, &#39;name&#39;, &#39;notes&#39;, &#39;num_hearts&#39;, &#39;projects&#39;, &#39;parent&#39;, &#39;workspace&#39;]</em></p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Streaming example:",
        "content": "api.project.tasks(1234567890).on('readable',function(){\n  console.log('Data:',this.read());\n}).on('end',function(){\n  console.log('Response received.');\n}).on('error',function(err){\n  console.log('An error occurred: ',err);\n});\n"
      },
      {
        "title": "Callback example:",
        "content": "api.project.tasks(1234567890,function(err,data){\n    if(err){\n        console.log('An error occurred:',err);\n    }else{\n        console.log('Data:',data);\n    }\n});\n"
      }
    ],
    "success": {
      "fields": {
        "Success response objects ~ Array/Event": [
          {
            "group": "response",
            "type": "Object",
            "field": "task",
            "optional": false,
            "description": "<p>Task information.</p>"
          },
          {
            "group": "response",
            "type": "Number",
            "field": "task.id",
            "optional": false,
            "description": "<p>Unique identifier.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "task.name",
            "optional": false,
            "description": "<p>Title field.</p>"
          },
          {
            "group": "response",
            "type": "Object",
            "field": "task.assignee",
            "optional": false,
            "description": "<p>Task assignee.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "task.assignee.id",
            "optional": false,
            "description": "<p>Assignee identifier.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "task.assignee_status",
            "optional": false,
            "description": "<p>Scheduling status of this task for the user it is assigned to. One of the following values: <code>inbox</code>, <code>later</code>, <code>today</code>, <code>upcoming</code>.</p>"
          },
          {
            "group": "response",
            "type": "Date",
            "field": "task.created_at",
            "optional": false,
            "description": "<p>Date created field.</p>"
          },
          {
            "group": "response",
            "type": "Date",
            "field": "task.modified_at",
            "optional": false,
            "description": "<p>Last modified date field.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "task.due_on",
            "optional": false,
            "description": "<p>Due date field.</p>"
          },
          {
            "group": "response",
            "type": "Date",
            "field": "task.completed_at",
            "optional": false,
            "description": "<p>Completed at date field.</p>"
          },
          {
            "group": "response",
            "type": "Boolean",
            "field": "task.completed",
            "optional": false,
            "description": "<p>If task is completed.</p>"
          },
          {
            "group": "response",
            "type": "Object",
            "field": "task.workspace",
            "optional": false,
            "description": "<p>Which workspace this task is connected to.</p>"
          },
          {
            "group": "response",
            "type": "Number",
            "field": "task.workspace.id",
            "optional": false,
            "description": "<p>Connected workspace identifier.</p>"
          },
          {
            "group": "response",
            "type": "Object[]",
            "field": "task.followers",
            "optional": false,
            "description": "<p>List of followers.</p>"
          },
          {
            "group": "response",
            "type": "Object",
            "field": "task.followers.id",
            "optional": false,
            "description": "<p>User identifier.</p>"
          },
          {
            "group": "response",
            "type": "Boolean",
            "field": "task.hearted",
            "optional": false,
            "description": "<p>If task has a heart or not.</p>"
          },
          {
            "group": "response",
            "type": "Object[]",
            "field": "task.hearts",
            "optional": false,
            "description": "<p>Who has given a heart to this task.</p>"
          },
          {
            "group": "response",
            "type": "Number",
            "field": "task.hearts.id",
            "optional": false,
            "description": "<p>User identifier.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "task.hearts.name",
            "optional": false,
            "description": "<p>User name.</p>"
          },
          {
            "group": "response",
            "type": "Number",
            "field": "task.num_hearts",
            "optional": false,
            "description": "<p>Amount of hearts gotten.</p>"
          },
          {
            "group": "response",
            "type": "Object[]",
            "field": "task.projects",
            "optional": false,
            "description": "<p>Which projects are connected to this task.</p>"
          },
          {
            "group": "response",
            "type": "Number",
            "field": "task.projects.id",
            "optional": false,
            "description": "<p>Project identifier.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "task.projects.name",
            "optional": false,
            "description": "<p>Project title.</p>"
          },
          {
            "group": "response",
            "type": "Object[]",
            "field": "task.parent",
            "optional": false,
            "description": "<p>The parent-task of this task.</p>"
          },
          {
            "group": "response",
            "type": "Number",
            "field": "task.parent.id",
            "optional": false,
            "description": "<p>Task identifier.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "task.parent.name",
            "optional": false,
            "description": "<p>Task title.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   [{\n     \"id\": 2345678901,\n     \"name\": \"Task1\",\n     \"assignee\": { id:6789012345 },\n     \"assignee_status\": \"upcoming\",\n     \"created_at\": \"2012-02-22T02:04:58.147Z\",\n     \"modified_at\": \"2012-02-22T02:06:58.147Z\",\n     \"due_on\": \"2012-02-24\",\n     \"completed_at\": \"2012-02-22T02:08:58.147Z\",\n     \"completed\": false,\n     \"hearted\": false,\n     \"hearts\":[ { id:5678901234, name: 'John Doe' } ]\n     \"num_hearts\":1,\n     \"notes\": \"Description of the task\",\n     \"workspace\": { id:3456789012 },\n     \"archived\": \"Team1\",\n     \"followers\":[ { id:5678901234 } ],\n     \"projects\": { id:6789012345, name:'project1'},\n     \"parent\": { id:7890123456, name:'Task22'},\n   }]\n"
        }
      ]
    },
    "filename": "lib/api/project.js"
  },
  {
    "version": "0.6.0",
    "type": "put",
    "url": "api.project.update();",
    "title": "{}.update",
    "name": "update",
    "description": "<p>Update a project.</p>",
    "group": "Project",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "field": "id",
            "optional": false,
            "description": "<p>Project identifier.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "field": "object",
            "optional": false,
            "description": "<p>Options object.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "field": "object.archived",
            "optional": true,
            "description": "<p>Project is archived or not.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "object.name",
            "optional": true,
            "description": "<p>Title of the project.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "object.color",
            "optional": true,
            "description": "<p>Color code the project with <em>dark-pink, dark-green, dark-blue, dark-red, dark-teal, dark-brown, dark-orange, dark-purple, dark-warm-gray, light-pink, light-green, light-blue, light-red, light-teal, light-yellow, light-orange, light-purple, light-warm-gray</em>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "object.notes",
            "optional": true,
            "description": "<p>Description of the project field.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "field": "object.fields",
            "optional": true,
            "description": "<p>Override default return fields : <em>[&#39;archived&#39;,&#39;created_at&#39;,&#39;followers&#39;,&#39;modified_at&#39;,&#39;name&#39;,&#39;color&#39;,&#39;notes&#39;,&#39;workspace&#39;,&#39;team&#39;]</em></p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Streaming example:",
        "content": "api.project.update(889012345679,{name:'Project4',color:'dark-blue',notes:'some other information about this project'}).on('readable',function(){\n  console.log('Data:',this.read());\n}).on('end',function(){\n  console.log('Response received.');\n}).on('error',function(err){\n  console.log('An error occurred: ',err);\n});\n"
      },
      {
        "title": "Callback example:",
        "content": "api.project.update(889012345679,{name:'Project4',color:'dark-blue',notes:'some other information about this project'},function(err,data){\n    if(err){\n        console.log('An error occurred:',err);\n    }else{\n        console.log('Data:',data);\n    }\n});\n"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "field": "project",
            "optional": false,
            "description": "<p>Project information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "project.id",
            "optional": false,
            "description": "<p>Unique identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "project.name",
            "optional": false,
            "description": "<p>Title field.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "project.created_at",
            "optional": false,
            "description": "<p>Date created field.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "project.modified_at",
            "optional": false,
            "description": "<p>Last modified date field.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "project.notes",
            "optional": false,
            "description": "<p>Description field.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "field": "project.archived",
            "optional": false,
            "description": "<p>If archived (not visible anymore).</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "project.workspace",
            "optional": false,
            "description": "<p>Which workspace this project is connected to.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "project.workspace.id",
            "optional": false,
            "description": "<p>Connected workspace identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "project.team",
            "optional": false,
            "description": "<p>Which team this project is connected to.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "project.team.id",
            "optional": false,
            "description": "<p>Connected team identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "project.color",
            "optional": false,
            "description": "<p>Color that is shown in the GUI like <em>dark-pink, dark-green, dark-blue, dark-red, dark-teal, dark-brown, dark-orange, dark-purple, dark-warm-gray, light-pink, light-green, light-blue, light-red, light-teal, light-yellow, light-orange, light-purple, light-warm-gray</em>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "field": "project.followers",
            "optional": false,
            "description": "<p>List of followers.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "project.followers.id",
            "optional": false,
            "description": "<p>User identifier.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": 2345678901,\n     \"name\": \"Project1\",\n     \"created_at\": \"2012-02-22T02:04:58.147Z\",\n     \"modified_at\": \"2012-02-22T02:06:58.147Z\",\n     \"notes\": \"Description of the project\",\n     \"archived\": false,\n     \"workspace\": { id:3456789012 },\n     \"archived\": \"Team1\",\n     \"color\": \"green\",\n     \"team\": { id:4567890123 },\n     \"followers\":[ { id:5678901234 } ]\n   }\n"
        }
      ]
    },
    "filename": "lib/api/project.js"
  },
  {
    "version": "0.6.0",
    "type": "post",
    "url": "api.story.create();",
    "title": "{}.create / api.task.addStory",
    "name": "create",
    "description": "<p>Create a story on a task.</p>",
    "group": "Story",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "field": "id",
            "optional": false,
            "description": "<p>Task identifier to create the story in.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "field": "object",
            "optional": false,
            "description": "<p>Options object.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "object.text",
            "optional": false,
            "description": "<p>Description field.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "field": "object.fields",
            "optional": true,
            "description": "<p>Override default return fields : <em>[&#39;created_at&#39;,&#39;created_by&#39;,&#39;hearted&#39;,&#39;hearts&#39;,&#39;num_hearts&#39;,&#39;text&#39;,&#39;target&#39;,&#39;source&#39;,&#39;type&#39;]</em></p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Streaming example:",
        "content": "api.story.create(5678901234,{text:'opmerking2'}).on('readable',function(){\n  console.log('Data:',this.read());\n}).on('end',function(){\n  console.log('Response received.');\n}).on('error',function(err){\n  console.log('An error occurred: ',err);\n});\n"
      },
      {
        "title": "Callback example:",
        "content": "api.story.create(5678901234,{text:'opmerking2'},function(err,data){\n    if(err){\n        console.log('An error occurred:',err);\n    }else{\n        console.log('Data:',data);\n    }\n});\n"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "field": "story",
            "optional": false,
            "description": "<p>Story information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "story.id",
            "optional": false,
            "description": "<p>Unique identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "story.text",
            "optional": false,
            "description": "<p>Description field.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "story.created_at",
            "optional": false,
            "description": "<p>Date created field.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "story.created_by",
            "optional": false,
            "description": "<p>Creator.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "story.created_by.id",
            "optional": false,
            "description": "<p>User identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "field": "story.hearted",
            "optional": true,
            "description": "<p>If story has been hearted by me.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "field": "story.hearts",
            "optional": true,
            "description": "<p>List of users that hearted this story.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "story.hearts.id",
            "optional": true,
            "description": "<p>User identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "story.num_hearts",
            "optional": true,
            "description": "<p>Amount of hearts this story has gotten.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "story.target",
            "optional": false,
            "description": "<p>Task this story is connected to.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "story.target.id",
            "optional": false,
            "description": "<p>Task identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "story.source",
            "optional": false,
            "description": "<p>Triggered through <code>web</code>, <code>email</code>, <code>mobile</code>, <code>api</code> or <code>unknown</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "story.type",
            "optional": false,
            "description": "<p>Valid values are <code>comment</code> or <code>system</code>.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": 2345678901,\n     \"name\": \"Tag1\",\n     \"created_at\": \"2012-02-22T02:04:58.147Z\",\n     \"created_by\": { id:1234567890 },\n     \"text\": \"The story itself\",\n     \"hearted\": false,\n     \"hearts\": [ { id:4567890123 } ],\n     \"num_hearts\": 1,\n     \"target\": [ { id:4567890123 } ],\n     \"source\": \"web\",\n     \"type\": \"comment\"\n   }\n"
        }
      ]
    },
    "filename": "lib/api/story.js"
  },
  {
    "version": "0.6.0",
    "type": "get",
    "url": "api.story.id();",
    "title": "{}.id",
    "name": "id",
    "description": "<p>Retrieve a single story of a task.</p>",
    "group": "Story",
    "groupDescription": "<p>A story represents an activity associated with an object in the Asana system. Stories are generated by the system whenever users take actions such as creating or assigning tasks, or moving tasks between projects. Comments are also a form of user-generated story.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "field": "id",
            "optional": false,
            "description": "<p>Story identifier.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "field": "object",
            "optional": true,
            "description": "<p>Options object.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "field": "object.fields",
            "optional": true,
            "description": "<p>Override default return fields : <em>[&#39;created_at&#39;,&#39;created_by&#39;,&#39;hearted&#39;,&#39;hearts&#39;,&#39;num_hearts&#39;,&#39;text&#39;,&#39;target&#39;,&#39;source&#39;,&#39;type&#39;]</em></p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Streaming example:",
        "content": "api.story.id(1234567890).on('readable',function(){\n  console.log('Data:',this.read());\n}).on('end',function(){\n  console.log('Response received.');\n}).on('error',function(err){\n  console.log('An error occurred: ',err);\n});\n"
      },
      {
        "title": "Callback example:",
        "content": "api.story.id(1234567890,function(err,data){\n    if(err){\n        console.log('An error occurred:',err);\n    }else{\n        console.log('Data:',data);\n    }\n});\n"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "field": "story",
            "optional": false,
            "description": "<p>Story information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "story.id",
            "optional": false,
            "description": "<p>Unique identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "story.text",
            "optional": false,
            "description": "<p>Description field.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "story.created_at",
            "optional": false,
            "description": "<p>Date created field.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "story.created_by",
            "optional": false,
            "description": "<p>Creator.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "story.created_by.id",
            "optional": false,
            "description": "<p>User identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "field": "story.hearted",
            "optional": true,
            "description": "<p>If story has been hearted by me.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "field": "story.hearts",
            "optional": true,
            "description": "<p>List of users that hearted this story.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "story.hearts.id",
            "optional": true,
            "description": "<p>User identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "story.num_hearts",
            "optional": true,
            "description": "<p>Amount of hearts this story has gotten.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "story.target",
            "optional": false,
            "description": "<p>Task this story is connected to.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "story.target.id",
            "optional": false,
            "description": "<p>Task identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "story.source",
            "optional": false,
            "description": "<p>Triggered through <code>web</code>, <code>email</code>, <code>mobile</code>, <code>api</code> or <code>unknown</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "story.type",
            "optional": false,
            "description": "<p>Valid values are <code>comment</code> or <code>system</code>.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": 2345678901,\n     \"name\": \"Tag1\",\n     \"created_at\": \"2012-02-22T02:04:58.147Z\",\n     \"created_by\": { id:1234567890 },\n     \"text\": \"The story itself\",\n     \"hearted\": false,\n     \"hearts\": [ { id:4567890123 } ],\n     \"num_hearts\": 1,\n     \"target\": [ { id:4567890123 } ],\n     \"source\": \"web\",\n     \"type\": \"comment\"\n   }\n"
        }
      ]
    },
    "filename": "lib/api/story.js"
  },
  {
    "version": "0.6.0",
    "type": "get",
    "url": "api.story.list();",
    "title": "{}.list / api.stories / api.task.stories",
    "name": "list",
    "description": "<p>Retrieve a list of (filtered) tasks.</p>",
    "group": "Story",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "field": "id",
            "optional": false,
            "description": "<p>Task identifier to find connected stories.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "field": "object",
            "optional": true,
            "description": "<p>Options object.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "field": "object.fields",
            "optional": true,
            "description": "<p>Override default return fields : <em>[&#39;created_at&#39;,&#39;created_by&#39;,&#39;hearted&#39;,&#39;hearts&#39;,&#39;num_hearts&#39;,&#39;text&#39;,&#39;target&#39;,&#39;source&#39;,&#39;type&#39;]</em></p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Streaming example:",
        "content": "api.story.list(1234567890).on('readable',function(){\n  console.log('Data:',this.read());\n}).on('end',function(){\n  console.log('Response received.');\n}).on('error',function(err){\n  console.log('An error occurred: ',err);\n});\n"
      },
      {
        "title": "Callback example:",
        "content": "api.story.list(1234567890,function(err,data){\n    if(err){\n        console.log('An error occurred:',err);\n    }else{\n        console.log('Data:',data);\n    }\n});\n"
      }
    ],
    "success": {
      "fields": {
        "Success response objects ~ Array/Event": [
          {
            "group": "response",
            "type": "Object",
            "field": "story",
            "optional": false,
            "description": "<p>Story information.</p>"
          },
          {
            "group": "response",
            "type": "Number",
            "field": "story.id",
            "optional": false,
            "description": "<p>Unique identifier.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "story.text",
            "optional": false,
            "description": "<p>Description field.</p>"
          },
          {
            "group": "response",
            "type": "Date",
            "field": "story.created_at",
            "optional": false,
            "description": "<p>Date created field.</p>"
          },
          {
            "group": "response",
            "type": "Object",
            "field": "story.created_by",
            "optional": false,
            "description": "<p>Creator.</p>"
          },
          {
            "group": "response",
            "type": "Number",
            "field": "story.created_by.id",
            "optional": false,
            "description": "<p>User identifier.</p>"
          },
          {
            "group": "response",
            "type": "Boolean",
            "field": "story.hearted",
            "optional": true,
            "description": "<p>If story has been hearted by me.</p>"
          },
          {
            "group": "response",
            "type": "Object[]",
            "field": "story.hearts",
            "optional": true,
            "description": "<p>List of users that hearted this story.</p>"
          },
          {
            "group": "response",
            "type": "Number",
            "field": "story.hearts.id",
            "optional": true,
            "description": "<p>User identifier.</p>"
          },
          {
            "group": "response",
            "type": "Number",
            "field": "story.num_hearts",
            "optional": true,
            "description": "<p>Amount of hearts this story has gotten.</p>"
          },
          {
            "group": "response",
            "type": "Object",
            "field": "story.target",
            "optional": false,
            "description": "<p>Task this story is connected to.</p>"
          },
          {
            "group": "response",
            "type": "Number",
            "field": "story.target.id",
            "optional": false,
            "description": "<p>Task identifier.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "story.source",
            "optional": false,
            "description": "<p>Triggered through <code>web</code>, <code>email</code>, <code>mobile</code>, <code>api</code> or <code>unknown</code>.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "story.type",
            "optional": false,
            "description": "<p>Valid values are <code>comment</code> or <code>system</code>.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   [{\n     \"id\": 2345678901,\n     \"name\": \"Tag1\",\n     \"created_at\": \"2012-02-22T02:04:58.147Z\",\n     \"created_by\": { id:1234567890 },\n     \"text\": \"The story itself\",\n     \"hearted\": false,\n     \"hearts\": [ { id:4567890123 } ],\n     \"num_hearts\": 1,\n     \"target\": [ { id:4567890123 } ],\n     \"source\": \"web\",\n     \"type\": \"comment\"\n   }]\n"
        }
      ]
    },
    "filename": "lib/api/story.js"
  },
  {
    "version": "0.6.0",
    "type": "post",
    "url": "api.tag.create();",
    "title": "{}.create",
    "name": "create",
    "description": "<p>Create a tag.</p>",
    "group": "Tag",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "field": "object",
            "optional": false,
            "description": "<p>Options object.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "object.name",
            "optional": true,
            "description": "<p>Title of the tag.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "object.color",
            "optional": true,
            "description": "<p>Color code the tag with <em>dark-pink, dark-green, dark-blue, dark-red, dark-teal, dark-brown, dark-orange, dark-purple, dark-warm-gray, light-pink, light-green, light-blue, light-red, light-teal, light-yellow, light-orange, light-purple, light-warm-gray</em>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "object.notes",
            "optional": true,
            "description": "<p>Description of the tag field.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "object.workspace",
            "optional": false,
            "description": "<p>Workspace identifier to connect tag with.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "field": "object.fields",
            "optional": true,
            "description": "<p>Override default return fields : <em>[&#39;created_at&#39;,&#39;followers&#39;,&#39;name&#39;,&#39;color&#39;,&#39;notes&#39;,&#39;workspace&#39;]</em></p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Streaming example:",
        "content": "api.tag.create({name:'Tag1',color:'light-orange',notes:'some information about this project',workspace:912345678}).on('readable',function(){\n  console.log('Data:',this.read());\n}).on('end',function(){\n  console.log('Response received.');\n}).on('error',function(err){\n  console.log('An error occurred: ',err);\n});\n"
      },
      {
        "title": "Callback example:",
        "content": "api.tag.create({name:'Tag1',color:'light-orange',notes:'some information about this project',workspace:912345678},function(err,data){\n    if(err){\n        console.log('An error occurred:',err);\n    }else{\n        console.log('Data:',data);\n    }\n});\n"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "field": "tag",
            "optional": false,
            "description": "<p>Tag information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "tag.id",
            "optional": false,
            "description": "<p>Unique identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "tag.name",
            "optional": false,
            "description": "<p>Title field.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "tag.created_at",
            "optional": false,
            "description": "<p>Date created field.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "tag.notes",
            "optional": false,
            "description": "<p>Description field.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "tag.workspace",
            "optional": false,
            "description": "<p>Which workspace this tag is connected to.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "tag.workspace.id",
            "optional": false,
            "description": "<p>Connected workspace identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "tag.color",
            "optional": false,
            "description": "<p>Color that is shown in the GUI like <em>dark-pink, dark-green, dark-blue, dark-red, dark-teal, dark-brown, dark-orange, dark-purple, dark-warm-gray, light-pink, light-green, light-blue, light-red, light-teal, light-yellow, light-orange, light-purple, light-warm-gray</em>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "field": "tag.followers",
            "optional": false,
            "description": "<p>List of followers.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "tag.followers.id",
            "optional": false,
            "description": "<p>User identifier.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": 2345678901,\n     \"name\": \"Tag1\",\n     \"created_at\": \"2012-02-22T02:04:58.147Z\",\n     \"notes\": \"Description of the tag\",\n     \"workspace\": { id:3456789012 },\n     \"color\": \"green\",\n     \"followers\":[ { id:5678901234 } ]\n   }\n"
        }
      ]
    },
    "filename": "lib/api/tag.js"
  },
  {
    "version": "0.6.0",
    "type": "get",
    "url": "api.tag.id();",
    "title": "{}.id",
    "name": "id",
    "description": "<p>Retrieve a single tag.</p>",
    "group": "Tag",
    "groupDescription": "<p>A tag is a label that can be attached to any task in Asana. It exists in a single workspace or organization.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "field": "id",
            "optional": false,
            "description": "<p>Tag identifier.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "field": "object",
            "optional": true,
            "description": "<p>Options object.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "field": "object.fields",
            "optional": true,
            "description": "<p>Override default return fields : <em>[&#39;created_at&#39;,&#39;followers&#39;,&#39;name&#39;,&#39;color&#39;,&#39;notes&#39;,&#39;workspace&#39;]</em></p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Streaming example:",
        "content": "api.tag.id(1234567890).on('readable',function(){\n  console.log('Data:',this.read());\n}).on('end',function(){\n  console.log('Response received.');\n}).on('error',function(err){\n  console.log('An error occurred: ',err);\n});\n"
      },
      {
        "title": "Callback example:",
        "content": "api.tag.id(1234567890,function(err,data){\n    if(err){\n        console.log('An error occurred:',err);\n    }else{\n        console.log('Data:',data);\n    }\n});\n"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "field": "tag",
            "optional": false,
            "description": "<p>Tag information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "tag.id",
            "optional": false,
            "description": "<p>Unique identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "tag.name",
            "optional": false,
            "description": "<p>Title field.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "tag.created_at",
            "optional": false,
            "description": "<p>Date created field.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "tag.notes",
            "optional": false,
            "description": "<p>Description field.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "tag.workspace",
            "optional": false,
            "description": "<p>Which workspace this tag is connected to.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "tag.workspace.id",
            "optional": false,
            "description": "<p>Connected workspace identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "tag.color",
            "optional": false,
            "description": "<p>Color that is shown in the GUI like <em>dark-pink, dark-green, dark-blue, dark-red, dark-teal, dark-brown, dark-orange, dark-purple, dark-warm-gray, light-pink, light-green, light-blue, light-red, light-teal, light-yellow, light-orange, light-purple, light-warm-gray</em>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "field": "tag.followers",
            "optional": false,
            "description": "<p>List of followers.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "tag.followers.id",
            "optional": false,
            "description": "<p>User identifier.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": 2345678901,\n     \"name\": \"Tag1\",\n     \"created_at\": \"2012-02-22T02:04:58.147Z\",\n     \"notes\": \"Description of the tag\",\n     \"workspace\": { id:3456789012 },\n     \"color\": \"green\",\n     \"followers\":[ { id:5678901234 } ]\n   }\n"
        }
      ]
    },
    "filename": "lib/api/tag.js"
  },
  {
    "version": "0.6.0",
    "type": "get",
    "url": "api.tag.list();",
    "title": "{}.list / api.tags",
    "name": "list",
    "description": "<p>Retrieve a list of (filtered) tags.</p>",
    "group": "Tag",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "field": "object",
            "optional": true,
            "description": "<p>Options object.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "field": "object.fields",
            "optional": true,
            "description": "<p>Override default return fields : <em>[&#39;created_at&#39;,&#39;followers&#39;,&#39;name&#39;,&#39;color&#39;,&#39;notes&#39;,&#39;workspace&#39;]</em></p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Streaming example:",
        "content": "api.tag.list().on('readable',function(){\n  console.log('Data:',this.read());\n}).on('end',function(){\n  console.log('Response received.');\n}).on('error',function(err){\n  console.log('An error occurred: ',err);\n});\n"
      },
      {
        "title": "Streaming workspace example:",
        "content": "api.tag.list({workspace:1234567890}).on('readable',function(){\n  console.log('Data:',this.read());\n}).on('end',function(){\n  console.log('Response received.');\n}).on('error',function(err){\n  console.log('An error occurred: ',err);\n});\n"
      },
      {
        "title": "Callback example:",
        "content": "api.tag.list(function(err,data){\n    if(err){\n        console.log('An error occurred:',err);\n    }else{\n        console.log('Data:',data);\n    }\n});\n"
      }
    ],
    "success": {
      "fields": {
        "Success response objects ~ Array/Event": [
          {
            "group": "response",
            "type": "Object",
            "field": "tag",
            "optional": false,
            "description": "<p>Tag information.</p>"
          },
          {
            "group": "response",
            "type": "Number",
            "field": "tag.id",
            "optional": false,
            "description": "<p>Unique identifier.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "tag.name",
            "optional": false,
            "description": "<p>Title field.</p>"
          },
          {
            "group": "response",
            "type": "Date",
            "field": "tag.created_at",
            "optional": false,
            "description": "<p>Date created field.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "tag.notes",
            "optional": false,
            "description": "<p>Description field.</p>"
          },
          {
            "group": "response",
            "type": "Object",
            "field": "tag.workspace",
            "optional": false,
            "description": "<p>Which workspace this tag is connected to.</p>"
          },
          {
            "group": "response",
            "type": "Number",
            "field": "tag.workspace.id",
            "optional": false,
            "description": "<p>Connected workspace identifier.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "tag.color",
            "optional": false,
            "description": "<p>Color that is shown in the GUI like <em>dark-pink, dark-green, dark-blue, dark-red, dark-teal, dark-brown, dark-orange, dark-purple, dark-warm-gray, light-pink, light-green, light-blue, light-red, light-teal, light-yellow, light-orange, light-purple, light-warm-gray</em>.</p>"
          },
          {
            "group": "response",
            "type": "Object[]",
            "field": "tag.followers",
            "optional": false,
            "description": "<p>List of followers.</p>"
          },
          {
            "group": "response",
            "type": "Object",
            "field": "tag.followers.id",
            "optional": false,
            "description": "<p>User identifier.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   [{\n     \"id\": 2345678901,\n     \"name\": \"Tag1\",\n     \"created_at\": \"2012-02-22T02:04:58.147Z\",\n     \"notes\": \"Description of the tag\",\n     \"workspace\": { id:3456789012 },\n     \"color\": \"green\",\n     \"followers\":[ { id:5678901234 } ]\n   }]\n"
        }
      ]
    },
    "filename": "lib/api/tag.js"
  },
  {
    "version": "0.6.0",
    "type": "get",
    "url": "api.tag.tasks();",
    "title": "{}.tasks",
    "name": "tasks",
    "description": "<p>Retrieve a list of tasks where a tag is used.</p>",
    "group": "Tag",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "field": "id",
            "optional": false,
            "description": "<p>Tag identifier.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "field": "object",
            "optional": true,
            "description": "<p>Options object.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "field": "object.fields",
            "optional": true,
            "description": "<p>Override default return fields : <em>[&#39;assignee&#39;, &#39;assignee_status&#39;, &#39;created_at&#39;, &#39;completed&#39;, &#39;completed_at&#39;, &#39;due_on&#39;, &#39;followers&#39;, &#39;hearted&#39;, &#39;hearts&#39;, &#39;modified_at&#39;, &#39;name&#39;, &#39;notes&#39;, &#39;num_hearts&#39;, &#39;projects&#39;, &#39;parent&#39;, &#39;workspace&#39;]</em></p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Streaming example:",
        "content": "api.tag.tasks(1234567890).on('readable',function(){\n  console.log('Data:',this.read());\n}).on('end',function(){\n  console.log('Response received.');\n}).on('error',function(err){\n  console.log('An error occurred: ',err);\n});\n"
      },
      {
        "title": "Callback example:",
        "content": "api.tag.tasks(1234567890,function(err,data){\n    if(err){\n        console.log('An error occurred:',err);\n    }else{\n        console.log('Data:',data);\n    }\n});\n"
      }
    ],
    "success": {
      "fields": {
        "Success response objects ~ Array/Event": [
          {
            "group": "response",
            "type": "Object",
            "field": "task",
            "optional": false,
            "description": "<p>Task information.</p>"
          },
          {
            "group": "response",
            "type": "Number",
            "field": "task.id",
            "optional": false,
            "description": "<p>Unique identifier.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "task.name",
            "optional": false,
            "description": "<p>Title field.</p>"
          },
          {
            "group": "response",
            "type": "Object",
            "field": "task.assignee",
            "optional": false,
            "description": "<p>Task assignee.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "task.assignee.id",
            "optional": false,
            "description": "<p>Assignee identifier.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "task.assignee_status",
            "optional": false,
            "description": "<p>Scheduling status of this task for the user it is assigned to. One of the following values: <code>inbox</code>, <code>later</code>, <code>today</code>, <code>upcoming</code>.</p>"
          },
          {
            "group": "response",
            "type": "Date",
            "field": "task.created_at",
            "optional": false,
            "description": "<p>Date created field.</p>"
          },
          {
            "group": "response",
            "type": "Date",
            "field": "task.modified_at",
            "optional": false,
            "description": "<p>Last modified date field.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "task.due_on",
            "optional": false,
            "description": "<p>Due date field.</p>"
          },
          {
            "group": "response",
            "type": "Date",
            "field": "task.completed_at",
            "optional": false,
            "description": "<p>Completed at date field.</p>"
          },
          {
            "group": "response",
            "type": "Boolean",
            "field": "task.completed",
            "optional": false,
            "description": "<p>If task is completed.</p>"
          },
          {
            "group": "response",
            "type": "Object",
            "field": "task.workspace",
            "optional": false,
            "description": "<p>Which workspace this task is connected to.</p>"
          },
          {
            "group": "response",
            "type": "Number",
            "field": "task.workspace.id",
            "optional": false,
            "description": "<p>Connected workspace identifier.</p>"
          },
          {
            "group": "response",
            "type": "Object[]",
            "field": "task.followers",
            "optional": false,
            "description": "<p>List of followers.</p>"
          },
          {
            "group": "response",
            "type": "Object",
            "field": "task.followers.id",
            "optional": false,
            "description": "<p>User identifier.</p>"
          },
          {
            "group": "response",
            "type": "Boolean",
            "field": "task.hearted",
            "optional": false,
            "description": "<p>If task has a heart or not.</p>"
          },
          {
            "group": "response",
            "type": "Object[]",
            "field": "task.hearts",
            "optional": false,
            "description": "<p>Who has given a heart to this task.</p>"
          },
          {
            "group": "response",
            "type": "Number",
            "field": "task.hearts.id",
            "optional": false,
            "description": "<p>User identifier.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "task.hearts.name",
            "optional": false,
            "description": "<p>User name.</p>"
          },
          {
            "group": "response",
            "type": "Number",
            "field": "task.num_hearts",
            "optional": false,
            "description": "<p>Amount of hearts gotten.</p>"
          },
          {
            "group": "response",
            "type": "Object[]",
            "field": "task.projects",
            "optional": false,
            "description": "<p>Which projects are connected to this task.</p>"
          },
          {
            "group": "response",
            "type": "Number",
            "field": "task.projects.id",
            "optional": false,
            "description": "<p>Project identifier.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "task.projects.name",
            "optional": false,
            "description": "<p>Project title.</p>"
          },
          {
            "group": "response",
            "type": "Object[]",
            "field": "task.parent",
            "optional": false,
            "description": "<p>The parent-task of this task.</p>"
          },
          {
            "group": "response",
            "type": "Number",
            "field": "task.parent.id",
            "optional": false,
            "description": "<p>Task identifier.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "task.parent.name",
            "optional": false,
            "description": "<p>Task title.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   [{\n     \"id\": 2345678901,\n     \"name\": \"Task1\",\n     \"assignee\": { id:6789012345 },\n     \"assignee_status\": \"upcoming\",\n     \"created_at\": \"2012-02-22T02:04:58.147Z\",\n     \"modified_at\": \"2012-02-22T02:06:58.147Z\",\n     \"due_on\": \"2012-02-24\",\n     \"completed_at\": \"2012-02-22T02:08:58.147Z\",\n     \"completed\": false,\n     \"hearted\": false,\n     \"hearts\":[ { id:5678901234, name: 'John Doe' } ]\n     \"num_hearts\":1,\n     \"notes\": \"Description of the task\",\n     \"workspace\": { id:3456789012 },\n     \"archived\": \"Team1\",\n     \"followers\":[ { id:5678901234 } ],\n     \"projects\": { id:6789012345, name:'project1'},\n     \"parent\": { id:7890123456, name:'Task22'},\n   }]\n"
        }
      ]
    },
    "filename": "lib/api/tag.js"
  },
  {
    "version": "0.6.0",
    "type": "put",
    "url": "api.tag.update();",
    "title": "{}.update",
    "name": "update",
    "description": "<p>Update a tag.</p>",
    "group": "Tag",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "field": "id",
            "optional": false,
            "description": "<p>Tag identifier.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "field": "object",
            "optional": false,
            "description": "<p>Options object.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "object.name",
            "optional": true,
            "description": "<p>Title of the tag.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "object.color",
            "optional": true,
            "description": "<p>Color code the tag with <em>dark-pink, dark-green, dark-blue, dark-red, dark-teal, dark-brown, dark-orange, dark-purple, dark-warm-gray, light-pink, light-green, light-blue, light-red, light-teal, light-yellow, light-orange, light-purple, light-warm-gray</em>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "object.notes",
            "optional": true,
            "description": "<p>Description of the tag field.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "field": "object.fields",
            "optional": true,
            "description": "<p>Override default return fields : <em>[&#39;created_at&#39;,&#39;followers&#39;,&#39;name&#39;,&#39;color&#39;,&#39;notes&#39;,&#39;workspace&#39;]</em>.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Streaming example:",
        "content": "api.tag.update(1234567890,{name:'Tag1',color:'light-orange',notes:'some information about this project',workspace:912345678}).on('readable',function(){\n  console.log('Data:',this.read());\n}).on('end',function(){\n  console.log('Response received.');\n}).on('error',function(err){\n  console.log('An error occurred: ',err);\n});\n"
      },
      {
        "title": "Callback example:",
        "content": "api.tag.update(1234567890,{name:'Tag1',color:'light-orange',notes:'some information about this project',workspace:912345678},function(err,data){\n    if(err){\n        console.log('An error occurred:',err);\n    }else{\n        console.log('Data:',data);\n    }\n});\n"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "field": "tag",
            "optional": false,
            "description": "<p>Tag information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "tag.id",
            "optional": false,
            "description": "<p>Unique identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "tag.name",
            "optional": false,
            "description": "<p>Title field.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "tag.created_at",
            "optional": false,
            "description": "<p>Date created field.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "tag.notes",
            "optional": false,
            "description": "<p>Description field.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "tag.workspace",
            "optional": false,
            "description": "<p>Which workspace this tag is connected to.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "tag.workspace.id",
            "optional": false,
            "description": "<p>Connected workspace identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "tag.color",
            "optional": false,
            "description": "<p>Color that is shown in the GUI like <em>dark-pink, dark-green, dark-blue, dark-red, dark-teal, dark-brown, dark-orange, dark-purple, dark-warm-gray, light-pink, light-green, light-blue, light-red, light-teal, light-yellow, light-orange, light-purple, light-warm-gray</em>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "field": "tag.followers",
            "optional": false,
            "description": "<p>List of followers.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "tag.followers.id",
            "optional": false,
            "description": "<p>User identifier.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": 2345678901,\n     \"name\": \"Tag1\",\n     \"created_at\": \"2012-02-22T02:04:58.147Z\",\n     \"notes\": \"Description of the tag\",\n     \"workspace\": { id:3456789012 },\n     \"color\": \"green\",\n     \"followers\":[ { id:5678901234 } ]\n   }\n"
        }
      ]
    },
    "filename": "lib/api/tag.js"
  },
  {
    "version": "0.6.0",
    "type": "post",
    "url": "api.task.addFollower();",
    "title": "{}.addFollower",
    "name": "addFollower",
    "description": "<p>Add a follower to a task.</p>",
    "group": "Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "field": "id",
            "optional": false,
            "description": "<p>Task identifier.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "field": "object",
            "optional": false,
            "description": "<p>Options object.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "field": "object.followers",
            "optional": false,
            "description": "<p>User identifier to follow the task.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "field": "object.fields",
            "optional": true,
            "description": "<p>Override default return fields : <em>[&#39;assignee&#39;, &#39;assignee_status&#39;, &#39;created_at&#39;, &#39;completed&#39;, &#39;completed_at&#39;, &#39;due_on&#39;, &#39;followers&#39;, &#39;hearted&#39;, &#39;hearts&#39;, &#39;modified_at&#39;, &#39;name&#39;, &#39;notes&#39;, &#39;num_hearts&#39;, &#39;projects&#39;, &#39;parent&#39;, &#39;workspace&#39;]</em></p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Streaming example:",
        "content": "api.task.addFollower(4567890123,{followers:[8901234567]}).on('readable',function(){\n  console.log('Data:',this.read());\n}).on('end',function(){\n  console.log('Response received.');\n}).on('error',function(err){\n  console.log('An error occurred: ',err);\n});\n"
      },
      {
        "title": "Callback example:",
        "content": "api.task.addFollower(4567890123,{followers:[8901234567]},function(err,data){\n    if(err){\n        console.log('An error occurred:',err);\n    }else{\n        console.log('Data:',data);\n    }\n});\n"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "field": "task",
            "optional": false,
            "description": "<p>Task information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "task.id",
            "optional": false,
            "description": "<p>Unique identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "task.name",
            "optional": false,
            "description": "<p>Title field.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "task.assignee",
            "optional": false,
            "description": "<p>Task assignee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "task.assignee.id",
            "optional": false,
            "description": "<p>Assignee identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "task.assignee_status",
            "optional": false,
            "description": "<p>Scheduling status of this task for the user it is assigned to. One of the following values: <code>inbox</code>, <code>later</code>, <code>today</code>, <code>upcoming</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "task.created_at",
            "optional": false,
            "description": "<p>Date created field.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "task.modified_at",
            "optional": false,
            "description": "<p>Last modified date field.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "task.due_on",
            "optional": false,
            "description": "<p>Due date field.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "task.completed_at",
            "optional": false,
            "description": "<p>Completed at date field.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "field": "task.completed",
            "optional": false,
            "description": "<p>If task is completed.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "task.workspace",
            "optional": false,
            "description": "<p>Which workspace this task is connected to.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "task.workspace.id",
            "optional": false,
            "description": "<p>Connected workspace identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "field": "task.followers",
            "optional": false,
            "description": "<p>List of followers.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "task.followers.id",
            "optional": false,
            "description": "<p>User identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "field": "task.hearted",
            "optional": false,
            "description": "<p>If task has a heart or not.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "field": "task.hearts",
            "optional": false,
            "description": "<p>Who has given a heart to this task.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "task.hearts.id",
            "optional": false,
            "description": "<p>User identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "task.hearts.name",
            "optional": false,
            "description": "<p>User name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "task.num_hearts",
            "optional": false,
            "description": "<p>Amount of hearts gotten.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "field": "task.projects",
            "optional": false,
            "description": "<p>Which projects are connected to this task.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "task.projects.id",
            "optional": false,
            "description": "<p>Project identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "task.projects.name",
            "optional": false,
            "description": "<p>Project title.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "field": "task.parent",
            "optional": false,
            "description": "<p>The parent-task of this task.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "task.parent.id",
            "optional": false,
            "description": "<p>Task identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "task.parent.name",
            "optional": false,
            "description": "<p>Task title.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": 2345678901,\n     \"name\": \"Task1\",\n     \"assignee\": { id:6789012345 },\n     \"assignee_status\": \"upcoming\",\n     \"created_at\": \"2012-02-22T02:04:58.147Z\",\n     \"modified_at\": \"2012-02-22T02:06:58.147Z\",\n     \"due_on\": \"2012-02-24\",\n     \"completed_at\": \"2012-02-22T02:08:58.147Z\",\n     \"completed\": false,\n     \"hearted\": false,\n     \"hearts\":[ { id:5678901234, name: 'John Doe' } ]\n     \"num_hearts\":1,\n     \"notes\": \"Description of the task\",\n     \"workspace\": { id:3456789012 },\n     \"archived\": \"Team1\",\n     \"followers\":[ { id:5678901234 } ],\n     \"projects\": { id:6789012345, name:'project1'},\n     \"parent\": { id:7890123456, name:'Task22'},\n   }\n"
        }
      ]
    },
    "filename": "lib/api/task.js"
  },
  {
    "version": "0.6.0",
    "type": "post",
    "url": "api.task.addParentTask();",
    "title": "{}.addParentTask",
    "name": "addParentTask",
    "description": "<p>Add a parent task to a task.</p>",
    "group": "Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "field": "id",
            "optional": false,
            "description": "<p>Task identifier.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "field": "object",
            "optional": false,
            "description": "<p>Options object.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "object.parent",
            "optional": false,
            "description": "<p>Task identifier that will become the parent task.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "field": "object.fields",
            "optional": true,
            "description": "<p>Override default return fields : <em>[&#39;assignee&#39;, &#39;assignee_status&#39;, &#39;created_at&#39;, &#39;completed&#39;, &#39;completed_at&#39;, &#39;due_on&#39;, &#39;followers&#39;, &#39;hearted&#39;, &#39;hearts&#39;, &#39;modified_at&#39;, &#39;name&#39;, &#39;notes&#39;, &#39;num_hearts&#39;, &#39;projects&#39;, &#39;parent&#39;, &#39;workspace&#39;]</em></p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Streaming example:",
        "content": "api.task.addParentTask(4567890123,{parent:6789012345}).on('readable',function(){\n  console.log('Data:',this.read());\n}).on('end',function(){\n  console.log('Response received.');\n}).on('error',function(err){\n  console.log('An error occurred: ',err);\n});\n"
      },
      {
        "title": "Callback example:",
        "content": "api.task.addParentTask(4567890123,{parent:6789012345},function(err,data){\n    if(err){\n        console.log('An error occurred:',err);\n    }else{\n        console.log('Data:',data);\n    }\n});\n"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "field": "task",
            "optional": false,
            "description": "<p>Task information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "task.id",
            "optional": false,
            "description": "<p>Unique identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "task.name",
            "optional": false,
            "description": "<p>Title field.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "task.assignee",
            "optional": false,
            "description": "<p>Task assignee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "task.assignee.id",
            "optional": false,
            "description": "<p>Assignee identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "task.assignee_status",
            "optional": false,
            "description": "<p>Scheduling status of this task for the user it is assigned to. One of the following values: <code>inbox</code>, <code>later</code>, <code>today</code>, <code>upcoming</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "task.created_at",
            "optional": false,
            "description": "<p>Date created field.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "task.modified_at",
            "optional": false,
            "description": "<p>Last modified date field.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "task.due_on",
            "optional": false,
            "description": "<p>Due date field.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "task.completed_at",
            "optional": false,
            "description": "<p>Completed at date field.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "field": "task.completed",
            "optional": false,
            "description": "<p>If task is completed.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "task.workspace",
            "optional": false,
            "description": "<p>Which workspace this task is connected to.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "task.workspace.id",
            "optional": false,
            "description": "<p>Connected workspace identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "field": "task.followers",
            "optional": false,
            "description": "<p>List of followers.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "task.followers.id",
            "optional": false,
            "description": "<p>User identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "field": "task.hearted",
            "optional": false,
            "description": "<p>If task has a heart or not.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "field": "task.hearts",
            "optional": false,
            "description": "<p>Who has given a heart to this task.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "task.hearts.id",
            "optional": false,
            "description": "<p>User identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "task.hearts.name",
            "optional": false,
            "description": "<p>User name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "task.num_hearts",
            "optional": false,
            "description": "<p>Amount of hearts gotten.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "field": "task.projects",
            "optional": false,
            "description": "<p>Which projects are connected to this task.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "task.projects.id",
            "optional": false,
            "description": "<p>Project identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "task.projects.name",
            "optional": false,
            "description": "<p>Project title.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "field": "task.parent",
            "optional": false,
            "description": "<p>The parent-task of this task.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "task.parent.id",
            "optional": false,
            "description": "<p>Task identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "task.parent.name",
            "optional": false,
            "description": "<p>Task title.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": 2345678901,\n     \"name\": \"Task1\",\n     \"assignee\": { id:6789012345 },\n     \"assignee_status\": \"upcoming\",\n     \"created_at\": \"2012-02-22T02:04:58.147Z\",\n     \"modified_at\": \"2012-02-22T02:06:58.147Z\",\n     \"due_on\": \"2012-02-24\",\n     \"completed_at\": \"2012-02-22T02:08:58.147Z\",\n     \"completed\": false,\n     \"hearted\": false,\n     \"hearts\":[ { id:5678901234, name: 'John Doe' } ]\n     \"num_hearts\":1,\n     \"notes\": \"Description of the task\",\n     \"workspace\": { id:3456789012 },\n     \"archived\": \"Team1\",\n     \"followers\":[ { id:5678901234 } ],\n     \"projects\": { id:6789012345, name:'project1'},\n     \"parent\": { id:7890123456, name:'Task22'},\n   }\n"
        }
      ]
    },
    "filename": "lib/api/task.js"
  },
  {
    "version": "0.6.0",
    "type": "post",
    "url": "api.task.addProject();",
    "title": "{}.addProject",
    "name": "addProject",
    "description": "<p>Add a project to a task.</p>",
    "group": "Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "field": "id",
            "optional": false,
            "description": "<p>Task identifier.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "field": "object",
            "optional": false,
            "description": "<p>Options object.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "object.project",
            "optional": false,
            "description": "<p>Project identifier to connect task to.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "object.insert_before",
            "optional": true,
            "description": "<p>Project identifier to insert project property identifier before.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "object.insert_after",
            "optional": true,
            "description": "<p>Project identifier to insert project property identifier after.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "field": "object.fields",
            "optional": true,
            "description": "<p>Override default return fields : <em>[&#39;assignee&#39;, &#39;assignee_status&#39;, &#39;created_at&#39;, &#39;completed&#39;, &#39;completed_at&#39;, &#39;due_on&#39;, &#39;followers&#39;, &#39;hearted&#39;, &#39;hearts&#39;, &#39;modified_at&#39;, &#39;name&#39;, &#39;notes&#39;, &#39;num_hearts&#39;, &#39;projects&#39;, &#39;parent&#39;, &#39;workspace&#39;]</em></p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Streaming example:",
        "content": "api.task.addProject(4567890123,{project:8901234567}).on('readable',function(){\n  console.log('Data:',this.read());\n}).on('end',function(){\n  console.log('Response received.');\n}).on('error',function(err){\n  console.log('An error occurred: ',err);\n});\n"
      },
      {
        "title": "Callback example:",
        "content": "api.task.addProject(4567890123,{project:8901234567},function(err,data){\n    if(err){\n        console.log('An error occurred:',err);\n    }else{\n        console.log('Data:',data);\n    }\n});\n"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "field": "object",
            "optional": false,
            "description": "<p>Empty object, so request succeeded.</p>"
          }
        ]
      }
    },
    "filename": "lib/api/task.js"
  },
  {
    "version": "0.6.0",
    "type": "post",
    "url": "api.task.addTag();",
    "title": "{}.addTag",
    "name": "addTag",
    "description": "<p>Add a tag to a task.</p>",
    "group": "Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "field": "id",
            "optional": false,
            "description": "<p>Task identifier.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "field": "object",
            "optional": false,
            "description": "<p>Options object.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "object.tag",
            "optional": false,
            "description": "<p>Tag identifier to connect to the task.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "field": "object.fields",
            "optional": true,
            "description": "<p>Override default return fields : <em>[&#39;assignee&#39;, &#39;assignee_status&#39;, &#39;created_at&#39;, &#39;completed&#39;, &#39;completed_at&#39;, &#39;due_on&#39;, &#39;followers&#39;, &#39;hearted&#39;, &#39;hearts&#39;, &#39;modified_at&#39;, &#39;name&#39;, &#39;notes&#39;, &#39;num_hearts&#39;, &#39;projects&#39;, &#39;parent&#39;, &#39;workspace&#39;]</em></p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Streaming example:",
        "content": "api.task.addTag(4567890123,{tag:8901234567}).on('readable',function(){\n  console.log('Data:',this.read());\n}).on('end',function(){\n  console.log('Response received.');\n}).on('error',function(err){\n  console.log('An error occurred: ',err);\n});\n"
      },
      {
        "title": "Callback example:",
        "content": "api.task.addTag(4567890123,{tag:8901234567},function(err,data){\n    if(err){\n        console.log('An error occurred:',err);\n    }else{\n        console.log('Data:',data);\n    }\n});\n"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "field": "object",
            "optional": false,
            "description": "<p>Empty object, so request succeeded.</p>"
          }
        ]
      }
    },
    "filename": "lib/api/task.js"
  },
  {
    "version": "0.6.0",
    "type": "post",
    "url": "api.task.create();",
    "title": "{}.create",
    "name": "create",
    "description": "<p>Create a (sub)task.</p>",
    "group": "Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "field": "object",
            "optional": false,
            "description": "<p>Options object.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number/String",
            "field": "object.assignee",
            "optional": true,
            "description": "<p>User identifier or {String} &#39;me&#39;.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "object.assignee_status",
            "optional": true,
            "description": "<p>Scheduling status of this task for the user it is assigned to like <code>inbox</code>, <code>later</code>, <code>today</code>,<code>upcoming</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "field": "object.completed",
            "optional": true,
            "description": "<p>If task is completed or not.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "field": "object.due_on",
            "optional": true,
            "description": "<p>Due date for the task like &#39;2012-03-26&#39;.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "field": "object.hearted",
            "optional": true,
            "description": "<p>If you want to give a heart to the task or not.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "object.name",
            "optional": true,
            "description": "<p>Task name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "object.notes",
            "optional": true,
            "description": "<p>Task description.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "field": "object.projects",
            "optional": true,
            "description": "<p>Project identifiers where this task belongs to.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "object.workspace",
            "optional": false,
            "description": "<p>Workspace identifier to connect task with.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "field": "object.fields",
            "optional": true,
            "description": "<p>Override default return fields : <em>[&#39;assignee&#39;, &#39;assignee_status&#39;, &#39;created_at&#39;, &#39;completed&#39;, &#39;completed_at&#39;, &#39;due_on&#39;, &#39;followers&#39;, &#39;hearted&#39;, &#39;hearts&#39;, &#39;modified_at&#39;, &#39;name&#39;, &#39;notes&#39;, &#39;num_hearts&#39;, &#39;projects&#39;, &#39;parent&#39;, &#39;workspace&#39;]</em></p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Streaming example:",
        "content": "api.task.create({name:'Task1',workspace:912345678}).on('readable',function(){\n  console.log('Data:',this.read());\n}).on('end',function(){\n  console.log('Response received.');\n}).on('error',function(err){\n  console.log('An error occurred: ',err);\n});\n"
      },
      {
        "title": "Callback example:",
        "content": "api.task.create({name:'Task1',workspace:912345678}},function(err,data){\n    if(err){\n        console.log('An error occurred:',err);\n    }else{\n        console.log('Data:',data);\n    }\n});\n"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "field": "task",
            "optional": false,
            "description": "<p>Task information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "task.id",
            "optional": false,
            "description": "<p>Unique identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "task.name",
            "optional": false,
            "description": "<p>Title field.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "task.assignee",
            "optional": false,
            "description": "<p>Task assignee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "task.assignee.id",
            "optional": false,
            "description": "<p>Assignee identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "task.assignee_status",
            "optional": false,
            "description": "<p>Scheduling status of this task for the user it is assigned to. One of the following values: <code>inbox</code>, <code>later</code>, <code>today</code>, <code>upcoming</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "task.created_at",
            "optional": false,
            "description": "<p>Date created field.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "task.modified_at",
            "optional": false,
            "description": "<p>Last modified date field.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "task.due_on",
            "optional": false,
            "description": "<p>Due date field.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "task.completed_at",
            "optional": false,
            "description": "<p>Completed at date field.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "field": "task.completed",
            "optional": false,
            "description": "<p>If task is completed.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "task.workspace",
            "optional": false,
            "description": "<p>Which workspace this task is connected to.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "task.workspace.id",
            "optional": false,
            "description": "<p>Connected workspace identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "field": "task.followers",
            "optional": false,
            "description": "<p>List of followers.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "task.followers.id",
            "optional": false,
            "description": "<p>User identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "field": "task.hearted",
            "optional": false,
            "description": "<p>If task has a heart or not.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "field": "task.hearts",
            "optional": false,
            "description": "<p>Who has given a heart to this task.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "task.hearts.id",
            "optional": false,
            "description": "<p>User identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "task.hearts.name",
            "optional": false,
            "description": "<p>User name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "task.num_hearts",
            "optional": false,
            "description": "<p>Amount of hearts gotten.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "field": "task.projects",
            "optional": false,
            "description": "<p>Which projects are connected to this task.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "task.projects.id",
            "optional": false,
            "description": "<p>Project identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "task.projects.name",
            "optional": false,
            "description": "<p>Project title.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "field": "task.parent",
            "optional": false,
            "description": "<p>The parent-task of this task.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "task.parent.id",
            "optional": false,
            "description": "<p>Task identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "task.parent.name",
            "optional": false,
            "description": "<p>Task title.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": 2345678901,\n     \"name\": \"Task1\",\n     \"assignee\": { id:6789012345 },\n     \"assignee_status\": \"upcoming\",\n     \"created_at\": \"2012-02-22T02:04:58.147Z\",\n     \"modified_at\": \"2012-02-22T02:06:58.147Z\",\n     \"due_on\": \"2012-02-24\",\n     \"completed_at\": \"2012-02-22T02:08:58.147Z\",\n     \"completed\": false,\n     \"hearted\": false,\n     \"hearts\":[ { id:5678901234, name: 'John Doe' } ]\n     \"num_hearts\":1,\n     \"notes\": \"Description of the task\",\n     \"workspace\": { id:3456789012 },\n     \"archived\": \"Team1\",\n     \"followers\":[ { id:5678901234 } ],\n     \"projects\": { id:6789012345, name:'project1'},\n     \"parent\": { id:7890123456, name:'Task22'},\n   }\n"
        }
      ]
    },
    "filename": "lib/api/task.js"
  },
  {
    "version": "0.6.0",
    "type": "get",
    "url": "api.task.id();",
    "title": "{}.id",
    "name": "id",
    "description": "<p>Retrieve a single task.</p>",
    "group": "Task",
    "groupDescription": "<p>The task is the basic object around which many operations in Asana are centered.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "field": "id",
            "optional": false,
            "description": "<p>Task identifier.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "field": "object",
            "optional": true,
            "description": "<p>Options object.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "field": "object.fields",
            "optional": true,
            "description": "<p>Override default return fields : <em>[&#39;assignee&#39;, &#39;assignee_status&#39;, &#39;created_at&#39;, &#39;completed&#39;, &#39;completed_at&#39;, &#39;due_on&#39;, &#39;followers&#39;, &#39;hearted&#39;, &#39;hearts&#39;, &#39;modified_at&#39;, &#39;name&#39;, &#39;notes&#39;, &#39;num_hearts&#39;, &#39;projects&#39;, &#39;parent&#39;, &#39;workspace&#39;]</em></p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Streaming example:",
        "content": "api.task.id(1234567890).on('readable',function(){\n  console.log('Data:',this.read());\n}).on('end',function(){\n  console.log('Response received.');\n}).on('error',function(err){\n  console.log('An error occurred: ',err);\n});\n"
      },
      {
        "title": "Callback example:",
        "content": "api.task.id(1234567890,function(err,data){\n    if(err){\n        console.log('An error occurred:',err);\n    }else{\n        console.log('Data:',data);\n    }\n});\n"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "field": "task",
            "optional": false,
            "description": "<p>Task information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "task.id",
            "optional": false,
            "description": "<p>Unique identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "task.name",
            "optional": false,
            "description": "<p>Title field.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "task.assignee",
            "optional": false,
            "description": "<p>Task assignee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "task.assignee.id",
            "optional": false,
            "description": "<p>Assignee identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "task.assignee_status",
            "optional": false,
            "description": "<p>Scheduling status of this task for the user it is assigned to. One of the following values: <code>inbox</code>, <code>later</code>, <code>today</code>, <code>upcoming</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "task.created_at",
            "optional": false,
            "description": "<p>Date created field.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "task.modified_at",
            "optional": false,
            "description": "<p>Last modified date field.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "task.due_on",
            "optional": false,
            "description": "<p>Due date field.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "task.completed_at",
            "optional": false,
            "description": "<p>Completed at date field.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "field": "task.completed",
            "optional": false,
            "description": "<p>If task is completed.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "task.workspace",
            "optional": false,
            "description": "<p>Which workspace this task is connected to.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "task.workspace.id",
            "optional": false,
            "description": "<p>Connected workspace identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "field": "task.followers",
            "optional": false,
            "description": "<p>List of followers.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "task.followers.id",
            "optional": false,
            "description": "<p>User identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "field": "task.hearted",
            "optional": false,
            "description": "<p>If task has a heart or not.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "field": "task.hearts",
            "optional": false,
            "description": "<p>Who has given a heart to this task.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "task.hearts.id",
            "optional": false,
            "description": "<p>User identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "task.hearts.name",
            "optional": false,
            "description": "<p>User name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "task.num_hearts",
            "optional": false,
            "description": "<p>Amount of hearts gotten.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "field": "task.projects",
            "optional": false,
            "description": "<p>Which projects are connected to this task.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "task.projects.id",
            "optional": false,
            "description": "<p>Project identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "task.projects.name",
            "optional": false,
            "description": "<p>Project title.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "field": "task.parent",
            "optional": false,
            "description": "<p>The parent-task of this task.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "task.parent.id",
            "optional": false,
            "description": "<p>Task identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "task.parent.name",
            "optional": false,
            "description": "<p>Task title.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": 2345678901,\n     \"name\": \"Task1\",\n     \"assignee\": { id:6789012345 },\n     \"assignee_status\": \"upcoming\",\n     \"created_at\": \"2012-02-22T02:04:58.147Z\",\n     \"modified_at\": \"2012-02-22T02:06:58.147Z\",\n     \"due_on\": \"2012-02-24\",\n     \"completed_at\": \"2012-02-22T02:08:58.147Z\",\n     \"completed\": false,\n     \"hearted\": false,\n     \"hearts\":[ { id:5678901234, name: 'John Doe' } ]\n     \"num_hearts\":1,\n     \"notes\": \"Description of the task\",\n     \"workspace\": { id:3456789012 },\n     \"archived\": \"Team1\",\n     \"followers\":[ { id:5678901234 } ],\n     \"projects\": { id:6789012345, name:'project1'},\n     \"parent\": { id:7890123456, name:'Task22'},\n   }\n"
        }
      ]
    },
    "filename": "lib/api/task.js"
  },
  {
    "version": "0.6.0",
    "type": "get",
    "url": "api.task.list();",
    "title": "{}.list / api.tasks",
    "name": "list",
    "description": "<p>Retrieve a list of (filtered) tasks.</p>",
    "group": "Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "field": "object",
            "optional": true,
            "description": "<p>Options object.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "object.project",
            "optional": true,
            "description": "<p>Project identifier. (<code>required</code> solely when looking for tasks in 1 project)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "object.workspace",
            "optional": true,
            "description": "<p>Workspace identifier. (<code>assignee</code> is then required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "object.assignee",
            "optional": true,
            "description": "<p>User identifier that is assigned to the task. (<code>workspace</code> is then required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "object.completed_since",
            "optional": true,
            "description": "<p>Completion date like 2012-02-22T02:06:58.158Z .</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "object.modified_since",
            "optional": true,
            "description": "<p>Modified date like 2012-02-22T02:06:58.158Z .</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "field": "object.fields",
            "optional": true,
            "description": "<p>Override default return fields : <em>[&#39;assignee&#39;, &#39;assignee_status&#39;, &#39;created_at&#39;, &#39;completed&#39;, &#39;completed_at&#39;, &#39;due_on&#39;, &#39;followers&#39;, &#39;hearted&#39;, &#39;hearts&#39;, &#39;modified_at&#39;, &#39;name&#39;, &#39;notes&#39;, &#39;num_hearts&#39;, &#39;projects&#39;, &#39;parent&#39;, &#39;workspace&#39;]</em></p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Streaming example:",
        "content": "api.task.list().on('readable',function(){\n  console.log('Data:',this.read());\n}).on('end',function(){\n  console.log('Response received.');\n}).on('error',function(err){\n  console.log('An error occurred: ',err);\n});\n"
      },
      {
        "title": "Streaming project example:",
        "content": "api.task.list({project:1234567890}).on('readable',function(){\n  console.log('Data:',this.read());\n}).on('end',function(){\n  console.log('Response received.');\n}).on('error',function(err){\n  console.log('An error occurred: ',err);\n});\n"
      },
      {
        "title": "Callback example:",
        "content": "api.task.list(,function(err,data){\n    if(err){\n        console.log('An error occurred:',err);\n    }else{\n        console.log('Data:',data);\n    }\n});\n"
      }
    ],
    "success": {
      "fields": {
        "Success response objects ~ Array/Event": [
          {
            "group": "response",
            "type": "Object",
            "field": "task",
            "optional": false,
            "description": "<p>Task information.</p>"
          },
          {
            "group": "response",
            "type": "Number",
            "field": "task.id",
            "optional": false,
            "description": "<p>Unique identifier.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "task.name",
            "optional": false,
            "description": "<p>Title field.</p>"
          },
          {
            "group": "response",
            "type": "Object",
            "field": "task.assignee",
            "optional": false,
            "description": "<p>Task assignee.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "task.assignee.id",
            "optional": false,
            "description": "<p>Assignee identifier.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "task.assignee_status",
            "optional": false,
            "description": "<p>Scheduling status of this task for the user it is assigned to. One of the following values: <code>inbox</code>, <code>later</code>, <code>today</code>, <code>upcoming</code>.</p>"
          },
          {
            "group": "response",
            "type": "Date",
            "field": "task.created_at",
            "optional": false,
            "description": "<p>Date created field.</p>"
          },
          {
            "group": "response",
            "type": "Date",
            "field": "task.modified_at",
            "optional": false,
            "description": "<p>Last modified date field.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "task.due_on",
            "optional": false,
            "description": "<p>Due date field.</p>"
          },
          {
            "group": "response",
            "type": "Date",
            "field": "task.completed_at",
            "optional": false,
            "description": "<p>Completed at date field.</p>"
          },
          {
            "group": "response",
            "type": "Boolean",
            "field": "task.completed",
            "optional": false,
            "description": "<p>If task is completed.</p>"
          },
          {
            "group": "response",
            "type": "Object",
            "field": "task.workspace",
            "optional": false,
            "description": "<p>Which workspace this task is connected to.</p>"
          },
          {
            "group": "response",
            "type": "Number",
            "field": "task.workspace.id",
            "optional": false,
            "description": "<p>Connected workspace identifier.</p>"
          },
          {
            "group": "response",
            "type": "Object[]",
            "field": "task.followers",
            "optional": false,
            "description": "<p>List of followers.</p>"
          },
          {
            "group": "response",
            "type": "Object",
            "field": "task.followers.id",
            "optional": false,
            "description": "<p>User identifier.</p>"
          },
          {
            "group": "response",
            "type": "Boolean",
            "field": "task.hearted",
            "optional": false,
            "description": "<p>If task has a heart or not.</p>"
          },
          {
            "group": "response",
            "type": "Object[]",
            "field": "task.hearts",
            "optional": false,
            "description": "<p>Who has given a heart to this task.</p>"
          },
          {
            "group": "response",
            "type": "Number",
            "field": "task.hearts.id",
            "optional": false,
            "description": "<p>User identifier.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "task.hearts.name",
            "optional": false,
            "description": "<p>User name.</p>"
          },
          {
            "group": "response",
            "type": "Number",
            "field": "task.num_hearts",
            "optional": false,
            "description": "<p>Amount of hearts gotten.</p>"
          },
          {
            "group": "response",
            "type": "Object[]",
            "field": "task.projects",
            "optional": false,
            "description": "<p>Which projects are connected to this task.</p>"
          },
          {
            "group": "response",
            "type": "Number",
            "field": "task.projects.id",
            "optional": false,
            "description": "<p>Project identifier.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "task.projects.name",
            "optional": false,
            "description": "<p>Project title.</p>"
          },
          {
            "group": "response",
            "type": "Object[]",
            "field": "task.parent",
            "optional": false,
            "description": "<p>The parent-task of this task.</p>"
          },
          {
            "group": "response",
            "type": "Number",
            "field": "task.parent.id",
            "optional": false,
            "description": "<p>Task identifier.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "task.parent.name",
            "optional": false,
            "description": "<p>Task title.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   [{\n     \"id\": 2345678901,\n     \"name\": \"Task1\",\n     \"assignee\": { id:6789012345 },\n     \"assignee_status\": \"upcoming\",\n     \"created_at\": \"2012-02-22T02:04:58.147Z\",\n     \"modified_at\": \"2012-02-22T02:06:58.147Z\",\n     \"due_on\": \"2012-02-24\",\n     \"completed_at\": \"2012-02-22T02:08:58.147Z\",\n     \"completed\": false,\n     \"hearted\": false,\n     \"hearts\":[ { id:5678901234, name: 'John Doe' } ]\n     \"num_hearts\":1,\n     \"notes\": \"Description of the task\",\n     \"workspace\": { id:3456789012 },\n     \"archived\": \"Team1\",\n     \"followers\":[ { id:5678901234 } ],\n     \"projects\": { id:6789012345, name:'project1'},\n     \"parent\": { id:7890123456, name:'Task22'},\n   }]\n"
        }
      ]
    },
    "filename": "lib/api/task.js"
  },
  {
    "version": "0.6.0",
    "type": "post",
    "url": "api.task.projects();",
    "title": "{}.projects",
    "name": "projects",
    "description": "<p>Retrieve a list of projects connected to a task.</p>",
    "group": "Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "field": "id",
            "optional": false,
            "description": "<p>Task identifier.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "field": "object",
            "optional": false,
            "description": "<p>Options object.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "field": "object.fields",
            "optional": true,
            "description": "<p>Override default return fields : <em>[&#39;assignee&#39;, &#39;assignee_status&#39;, &#39;created_at&#39;, &#39;completed&#39;, &#39;completed_at&#39;, &#39;due_on&#39;, &#39;followers&#39;, &#39;hearted&#39;, &#39;hearts&#39;, &#39;modified_at&#39;, &#39;name&#39;, &#39;notes&#39;, &#39;num_hearts&#39;, &#39;projects&#39;, &#39;parent&#39;, &#39;workspace&#39;]</em></p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Streaming example:",
        "content": "api.task.projects(4567890123).on('readable',function(){\n  console.log('Data:',this.read());\n}).on('end',function(){\n  console.log('Response received.');\n}).on('error',function(err){\n  console.log('An error occurred: ',err);\n});\n"
      },
      {
        "title": "Callback example:",
        "content": "api.task.projects(4567890123,function(err,data){\n    if(err){\n        console.log('An error occurred:',err);\n    }else{\n        console.log('Data:',data);\n    }\n});\n"
      }
    ],
    "success": {
      "fields": {
        "Success response objects ~ Array/Event": [
          {
            "group": "response",
            "type": "Object",
            "field": "project",
            "optional": false,
            "description": "<p>Project information.</p>"
          },
          {
            "group": "response",
            "type": "Number",
            "field": "project.id",
            "optional": false,
            "description": "<p>Unique identifier.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "project.name",
            "optional": false,
            "description": "<p>Title field.</p>"
          },
          {
            "group": "response",
            "type": "Date",
            "field": "project.created_at",
            "optional": false,
            "description": "<p>Date created field.</p>"
          },
          {
            "group": "response",
            "type": "Date",
            "field": "project.modified_at",
            "optional": false,
            "description": "<p>Last modified date field.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "project.notes",
            "optional": false,
            "description": "<p>Description field.</p>"
          },
          {
            "group": "response",
            "type": "Boolean",
            "field": "project.archived",
            "optional": false,
            "description": "<p>If archived (not visible anymore).</p>"
          },
          {
            "group": "response",
            "type": "Object",
            "field": "project.workspace",
            "optional": false,
            "description": "<p>Which workspace this project is connected to.</p>"
          },
          {
            "group": "response",
            "type": "Number",
            "field": "project.workspace.id",
            "optional": false,
            "description": "<p>Connected workspace identifier.</p>"
          },
          {
            "group": "response",
            "type": "Object",
            "field": "project.team",
            "optional": false,
            "description": "<p>Which team this project is connected to.</p>"
          },
          {
            "group": "response",
            "type": "Number",
            "field": "project.team.id",
            "optional": false,
            "description": "<p>Connected team identifier.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "project.color",
            "optional": false,
            "description": "<p>Color that is shown in the GUI like <em>dark-pink, dark-green, dark-blue, dark-red, dark-teal, dark-brown, dark-orange, dark-purple, dark-warm-gray, light-pink, light-green, light-blue, light-red, light-teal, light-yellow, light-orange, light-purple, light-warm-gray</em>.</p>"
          },
          {
            "group": "response",
            "type": "Object[]",
            "field": "project.followers",
            "optional": false,
            "description": "<p>List of followers.</p>"
          },
          {
            "group": "response",
            "type": "Object",
            "field": "project.followers.id",
            "optional": false,
            "description": "<p>User identifier.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   [{\n     \"id\": 2345678901,\n     \"name\": \"Project1\",\n     \"created_at\": \"2012-02-22T02:04:58.147Z\",\n     \"modified_at\": \"2012-02-22T02:06:58.147Z\",\n     \"notes\": \"Description of the project\",\n     \"archived\": false,\n     \"workspace\": { id:3456789012 },\n     \"archived\": \"Team1\",\n     \"color\": \"green\",\n     \"team\": { id:4567890123 },\n     \"followers\":[ { id:5678901234 } ]\n   }]\n"
        }
      ]
    },
    "filename": "lib/api/task.js"
  },
  {
    "version": "0.6.0",
    "type": "put",
    "url": "api.task.remove();",
    "title": "{}.remove",
    "name": "remove",
    "description": "<p>Remove a (sub)task.</p>",
    "group": "Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "field": "id",
            "optional": false,
            "description": "<p>Task identifier.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "field": "object",
            "optional": true,
            "description": "<p>Options object.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "field": "object.fields",
            "optional": true,
            "description": "<p>Override default return fields : <em>[&#39;assignee&#39;, &#39;assignee_status&#39;, &#39;created_at&#39;, &#39;completed&#39;, &#39;completed_at&#39;, &#39;due_on&#39;, &#39;followers&#39;, &#39;hearted&#39;, &#39;hearts&#39;, &#39;modified_at&#39;, &#39;name&#39;, &#39;notes&#39;, &#39;num_hearts&#39;, &#39;projects&#39;, &#39;parent&#39;, &#39;workspace&#39;]</em></p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Streaming example:",
        "content": "api.task.remove(5678901234).on('readable',function(){\n  console.log('Data:',this.read());\n}).on('end',function(){\n  console.log('Response received.');\n}).on('error',function(err){\n  console.log('An error occurred: ',err);\n});\n"
      },
      {
        "title": "Callback example:",
        "content": "api.task.remove(5678901234,function(err,data){\n    if(err){\n        console.log('An error occurred:',err);\n    }else{\n        console.log('Data:',data);\n    }\n});\n"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "field": "task",
            "optional": false,
            "description": "<p>Task information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "task.id",
            "optional": false,
            "description": "<p>Unique identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "task.name",
            "optional": false,
            "description": "<p>Title field.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "task.assignee",
            "optional": false,
            "description": "<p>Task assignee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "task.assignee.id",
            "optional": false,
            "description": "<p>Assignee identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "task.assignee_status",
            "optional": false,
            "description": "<p>Scheduling status of this task for the user it is assigned to. One of the following values: <code>inbox</code>, <code>later</code>, <code>today</code>, <code>upcoming</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "task.created_at",
            "optional": false,
            "description": "<p>Date created field.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "task.modified_at",
            "optional": false,
            "description": "<p>Last modified date field.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "task.due_on",
            "optional": false,
            "description": "<p>Due date field.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "task.completed_at",
            "optional": false,
            "description": "<p>Completed at date field.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "field": "task.completed",
            "optional": false,
            "description": "<p>If task is completed.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "task.workspace",
            "optional": false,
            "description": "<p>Which workspace this task is connected to.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "task.workspace.id",
            "optional": false,
            "description": "<p>Connected workspace identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "field": "task.followers",
            "optional": false,
            "description": "<p>List of followers.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "task.followers.id",
            "optional": false,
            "description": "<p>User identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "field": "task.hearted",
            "optional": false,
            "description": "<p>If task has a heart or not.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "field": "task.hearts",
            "optional": false,
            "description": "<p>Who has given a heart to this task.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "task.hearts.id",
            "optional": false,
            "description": "<p>User identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "task.hearts.name",
            "optional": false,
            "description": "<p>User name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "task.num_hearts",
            "optional": false,
            "description": "<p>Amount of hearts gotten.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "field": "task.projects",
            "optional": false,
            "description": "<p>Which projects are connected to this task.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "task.projects.id",
            "optional": false,
            "description": "<p>Project identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "task.projects.name",
            "optional": false,
            "description": "<p>Project title.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "field": "task.parent",
            "optional": false,
            "description": "<p>The parent-task of this task.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "task.parent.id",
            "optional": false,
            "description": "<p>Task identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "task.parent.name",
            "optional": false,
            "description": "<p>Task title.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": 2345678901,\n     \"name\": \"Task1\",\n     \"assignee\": { id:6789012345 },\n     \"assignee_status\": \"upcoming\",\n     \"created_at\": \"2012-02-22T02:04:58.147Z\",\n     \"modified_at\": \"2012-02-22T02:06:58.147Z\",\n     \"due_on\": \"2012-02-24\",\n     \"completed_at\": \"2012-02-22T02:08:58.147Z\",\n     \"completed\": false,\n     \"hearted\": false,\n     \"hearts\":[ { id:5678901234, name: 'John Doe' } ]\n     \"num_hearts\":1,\n     \"notes\": \"Description of the task\",\n     \"workspace\": { id:3456789012 },\n     \"archived\": \"Team1\",\n     \"followers\":[ { id:5678901234 } ],\n     \"projects\": { id:6789012345, name:'project1'},\n     \"parent\": { id:7890123456, name:'Task22'},\n   }\n"
        }
      ]
    },
    "filename": "lib/api/task.js"
  },
  {
    "version": "0.6.0",
    "type": "post",
    "url": "api.task.removeFollower();",
    "title": "{}.removeFollower",
    "name": "removeFollower",
    "description": "<p>Remove a follower from a task.</p>",
    "group": "Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "field": "id",
            "optional": false,
            "description": "<p>Task identifier.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "field": "object",
            "optional": false,
            "description": "<p>Options object.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "field": "object.followers",
            "optional": false,
            "description": "<p>User identifier to remove from the task.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "field": "object.fields",
            "optional": true,
            "description": "<p>Override default return fields : <em>[&#39;assignee&#39;, &#39;assignee_status&#39;, &#39;created_at&#39;, &#39;completed&#39;, &#39;completed_at&#39;, &#39;due_on&#39;, &#39;followers&#39;, &#39;hearted&#39;, &#39;hearts&#39;, &#39;modified_at&#39;, &#39;name&#39;, &#39;notes&#39;, &#39;num_hearts&#39;, &#39;projects&#39;, &#39;parent&#39;, &#39;workspace&#39;]</em></p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Streaming example:",
        "content": "api.task.removeFollower(4567890123,{followers:[8901234567]}).on('readable',function(){\n  console.log('Data:',this.read());\n}).on('end',function(){\n  console.log('Response received.');\n}).on('error',function(err){\n  console.log('An error occurred: ',err);\n});\n"
      },
      {
        "title": "Callback example:",
        "content": "api.task.removeFollower(4567890123,{followers:[8901234567]},function(err,data){\n    if(err){\n        console.log('An error occurred:',err);\n    }else{\n        console.log('Data:',data);\n    }\n});\n"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "field": "task",
            "optional": false,
            "description": "<p>Task information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "task.id",
            "optional": false,
            "description": "<p>Unique identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "task.name",
            "optional": false,
            "description": "<p>Title field.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "task.assignee",
            "optional": false,
            "description": "<p>Task assignee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "task.assignee.id",
            "optional": false,
            "description": "<p>Assignee identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "task.assignee_status",
            "optional": false,
            "description": "<p>Scheduling status of this task for the user it is assigned to. One of the following values: <code>inbox</code>, <code>later</code>, <code>today</code>, <code>upcoming</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "task.created_at",
            "optional": false,
            "description": "<p>Date created field.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "task.modified_at",
            "optional": false,
            "description": "<p>Last modified date field.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "task.due_on",
            "optional": false,
            "description": "<p>Due date field.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "task.completed_at",
            "optional": false,
            "description": "<p>Completed at date field.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "field": "task.completed",
            "optional": false,
            "description": "<p>If task is completed.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "task.workspace",
            "optional": false,
            "description": "<p>Which workspace this task is connected to.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "task.workspace.id",
            "optional": false,
            "description": "<p>Connected workspace identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "field": "task.followers",
            "optional": false,
            "description": "<p>List of followers.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "task.followers.id",
            "optional": false,
            "description": "<p>User identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "field": "task.hearted",
            "optional": false,
            "description": "<p>If task has a heart or not.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "field": "task.hearts",
            "optional": false,
            "description": "<p>Who has given a heart to this task.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "task.hearts.id",
            "optional": false,
            "description": "<p>User identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "task.hearts.name",
            "optional": false,
            "description": "<p>User name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "task.num_hearts",
            "optional": false,
            "description": "<p>Amount of hearts gotten.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "field": "task.projects",
            "optional": false,
            "description": "<p>Which projects are connected to this task.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "task.projects.id",
            "optional": false,
            "description": "<p>Project identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "task.projects.name",
            "optional": false,
            "description": "<p>Project title.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "field": "task.parent",
            "optional": false,
            "description": "<p>The parent-task of this task.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "task.parent.id",
            "optional": false,
            "description": "<p>Task identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "task.parent.name",
            "optional": false,
            "description": "<p>Task title.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": 2345678901,\n     \"name\": \"Task1\",\n     \"assignee\": { id:6789012345 },\n     \"assignee_status\": \"upcoming\",\n     \"created_at\": \"2012-02-22T02:04:58.147Z\",\n     \"modified_at\": \"2012-02-22T02:06:58.147Z\",\n     \"due_on\": \"2012-02-24\",\n     \"completed_at\": \"2012-02-22T02:08:58.147Z\",\n     \"completed\": false,\n     \"hearted\": false,\n     \"hearts\":[ { id:5678901234, name: 'John Doe' } ]\n     \"num_hearts\":1,\n     \"notes\": \"Description of the task\",\n     \"workspace\": { id:3456789012 },\n     \"archived\": \"Team1\",\n     \"followers\":[ { id:5678901234 } ],\n     \"projects\": { id:6789012345, name:'project1'},\n     \"parent\": { id:7890123456, name:'Task22'},\n   }\n"
        }
      ]
    },
    "filename": "lib/api/task.js"
  },
  {
    "version": "0.6.0",
    "type": "post",
    "url": "api.task.removeParentTask();",
    "title": "{}.removeParentTask",
    "name": "removeParentTask",
    "description": "<p>Remove a parent task from a task.</p>",
    "group": "Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "field": "id",
            "optional": false,
            "description": "<p>Task identifier.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "field": "object",
            "optional": false,
            "description": "<p>Options object.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "field": "object.fields",
            "optional": true,
            "description": "<p>Override default return fields : <em>[&#39;assignee&#39;, &#39;assignee_status&#39;, &#39;created_at&#39;, &#39;completed&#39;, &#39;completed_at&#39;, &#39;due_on&#39;, &#39;followers&#39;, &#39;hearted&#39;, &#39;hearts&#39;, &#39;modified_at&#39;, &#39;name&#39;, &#39;notes&#39;, &#39;num_hearts&#39;, &#39;projects&#39;, &#39;parent&#39;, &#39;workspace&#39;]</em></p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Streaming example:",
        "content": "api.task.removeParentTask(4567890123).on('readable',function(){\n  console.log('Data:',this.read());\n}).on('end',function(){\n  console.log('Response received.');\n}).on('error',function(err){\n  console.log('An error occurred: ',err);\n});\n"
      },
      {
        "title": "Callback example:",
        "content": "api.task.removeParentTask(4567890123,function(err,data){\n    if(err){\n        console.log('An error occurred:',err);\n    }else{\n        console.log('Data:',data);\n    }\n});\n"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "field": "task",
            "optional": false,
            "description": "<p>Task information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "task.id",
            "optional": false,
            "description": "<p>Unique identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "task.name",
            "optional": false,
            "description": "<p>Title field.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "task.assignee",
            "optional": false,
            "description": "<p>Task assignee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "task.assignee.id",
            "optional": false,
            "description": "<p>Assignee identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "task.assignee_status",
            "optional": false,
            "description": "<p>Scheduling status of this task for the user it is assigned to. One of the following values: <code>inbox</code>, <code>later</code>, <code>today</code>, <code>upcoming</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "task.created_at",
            "optional": false,
            "description": "<p>Date created field.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "task.modified_at",
            "optional": false,
            "description": "<p>Last modified date field.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "task.due_on",
            "optional": false,
            "description": "<p>Due date field.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "task.completed_at",
            "optional": false,
            "description": "<p>Completed at date field.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "field": "task.completed",
            "optional": false,
            "description": "<p>If task is completed.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "task.workspace",
            "optional": false,
            "description": "<p>Which workspace this task is connected to.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "task.workspace.id",
            "optional": false,
            "description": "<p>Connected workspace identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "field": "task.followers",
            "optional": false,
            "description": "<p>List of followers.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "task.followers.id",
            "optional": false,
            "description": "<p>User identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "field": "task.hearted",
            "optional": false,
            "description": "<p>If task has a heart or not.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "field": "task.hearts",
            "optional": false,
            "description": "<p>Who has given a heart to this task.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "task.hearts.id",
            "optional": false,
            "description": "<p>User identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "task.hearts.name",
            "optional": false,
            "description": "<p>User name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "task.num_hearts",
            "optional": false,
            "description": "<p>Amount of hearts gotten.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "field": "task.projects",
            "optional": false,
            "description": "<p>Which projects are connected to this task.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "task.projects.id",
            "optional": false,
            "description": "<p>Project identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "task.projects.name",
            "optional": false,
            "description": "<p>Project title.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "field": "task.parent",
            "optional": false,
            "description": "<p>The parent-task of this task.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "task.parent.id",
            "optional": false,
            "description": "<p>Task identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "task.parent.name",
            "optional": false,
            "description": "<p>Task title.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": 2345678901,\n     \"name\": \"Task1\",\n     \"assignee\": { id:6789012345 },\n     \"assignee_status\": \"upcoming\",\n     \"created_at\": \"2012-02-22T02:04:58.147Z\",\n     \"modified_at\": \"2012-02-22T02:06:58.147Z\",\n     \"due_on\": \"2012-02-24\",\n     \"completed_at\": \"2012-02-22T02:08:58.147Z\",\n     \"completed\": false,\n     \"hearted\": false,\n     \"hearts\":[ { id:5678901234, name: 'John Doe' } ]\n     \"num_hearts\":1,\n     \"notes\": \"Description of the task\",\n     \"workspace\": { id:3456789012 },\n     \"archived\": \"Team1\",\n     \"followers\":[ { id:5678901234 } ],\n     \"projects\": { id:6789012345, name:'project1'},\n     \"parent\": { id:7890123456, name:'Task22'},\n   }\n"
        }
      ]
    },
    "filename": "lib/api/task.js"
  },
  {
    "version": "0.6.0",
    "type": "post",
    "url": "api.task.removeProject();",
    "title": "{}.removeProject",
    "name": "removeProject",
    "description": "<p>Remove a project from a task.</p>",
    "group": "Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "field": "id",
            "optional": false,
            "description": "<p>Task identifier.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "field": "object",
            "optional": false,
            "description": "<p>Options object.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "object.project",
            "optional": false,
            "description": "<p>Project identifier to remove from the task.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "field": "object.fields",
            "optional": true,
            "description": "<p>Override default return fields : <em>[&#39;assignee&#39;, &#39;assignee_status&#39;, &#39;created_at&#39;, &#39;completed&#39;, &#39;completed_at&#39;, &#39;due_on&#39;, &#39;followers&#39;, &#39;hearted&#39;, &#39;hearts&#39;, &#39;modified_at&#39;, &#39;name&#39;, &#39;notes&#39;, &#39;num_hearts&#39;, &#39;projects&#39;, &#39;parent&#39;, &#39;workspace&#39;]</em></p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Streaming example:",
        "content": "api.task.removeProject(4567890123,{project:8901234567}).on('readable',function(){\n  console.log('Data:',this.read());\n}).on('end',function(){\n  console.log('Response received.');\n}).on('error',function(err){\n  console.log('An error occurred: ',err);\n});\n"
      },
      {
        "title": "Callback example:",
        "content": "api.task.removeProject(4567890123,{project:8901234567},function(err,data){\n    if(err){\n        console.log('An error occurred:',err);\n    }else{\n        console.log('Data:',data);\n    }\n});\n"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "field": "object",
            "optional": false,
            "description": "<p>Empty object, so request succeeded.</p>"
          }
        ]
      }
    },
    "filename": "lib/api/task.js"
  },
  {
    "version": "0.6.0",
    "type": "post",
    "url": "api.task.removeTag();",
    "title": "{}.removeTag",
    "name": "removeTag",
    "description": "<p>Remove a tag from a task.</p>",
    "group": "Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "field": "id",
            "optional": false,
            "description": "<p>Task identifier.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "field": "object",
            "optional": false,
            "description": "<p>Options object.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "object.tag",
            "optional": false,
            "description": "<p>Tag identifier to remove from the task.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "field": "object.fields",
            "optional": true,
            "description": "<p>Override default return fields : <em>[&#39;assignee&#39;, &#39;assignee_status&#39;, &#39;created_at&#39;, &#39;completed&#39;, &#39;completed_at&#39;, &#39;due_on&#39;, &#39;followers&#39;, &#39;hearted&#39;, &#39;hearts&#39;, &#39;modified_at&#39;, &#39;name&#39;, &#39;notes&#39;, &#39;num_hearts&#39;, &#39;projects&#39;, &#39;parent&#39;, &#39;workspace&#39;]</em></p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Streaming example:",
        "content": "api.task.removeTag(4567890123,{tag:8901234567}).on('readable',function(){\n  console.log('Data:',this.read());\n}).on('end',function(){\n  console.log('Response received.');\n}).on('error',function(err){\n  console.log('An error occurred: ',err);\n});\n"
      },
      {
        "title": "Callback example:",
        "content": "api.task.removeTag(4567890123,{tag:8901234567},function(err,data){\n    if(err){\n        console.log('An error occurred:',err);\n    }else{\n        console.log('Data:',data);\n    }\n});\n"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "field": "object",
            "optional": false,
            "description": "<p>Empty object, so request succeeded.</p>"
          }
        ]
      }
    },
    "filename": "lib/api/task.js"
  },
  {
    "version": "0.6.0",
    "type": "get",
    "url": "api.task.subtasks();",
    "title": "{}.subtasks",
    "name": "subtasks",
    "description": "<p>Retrieve a list of subtasks of a task.</p>",
    "group": "Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "field": "id",
            "optional": false,
            "description": "<p>Task identifier.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "field": "object",
            "optional": true,
            "description": "<p>Options object.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "field": "object.fields",
            "optional": true,
            "description": "<p>Override default return fields : <em>[&#39;assignee&#39;, &#39;assignee_status&#39;, &#39;created_at&#39;, &#39;completed&#39;, &#39;completed_at&#39;, &#39;due_on&#39;, &#39;followers&#39;, &#39;hearted&#39;, &#39;hearts&#39;, &#39;modified_at&#39;, &#39;name&#39;, &#39;notes&#39;, &#39;num_hearts&#39;, &#39;projects&#39;, &#39;parent&#39;, &#39;workspace&#39;]</em></p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Streaming example:",
        "content": "api.task.subtasks(5678901234).on('readable',function(){\n  console.log('Data:',this.read());\n}).on('end',function(){\n  console.log('Response received.');\n}).on('error',function(err){\n  console.log('An error occurred: ',err);\n});\n"
      },
      {
        "title": "Callback example:",
        "content": "api.task.subtasks(5678901234,function(err,data){\n    if(err){\n        console.log('An error occurred:',err);\n    }else{\n        console.log('Data:',data);\n    }\n});\n"
      }
    ],
    "success": {
      "fields": {
        "Success response objects ~ Array/Event": [
          {
            "group": "response",
            "type": "Object",
            "field": "task",
            "optional": false,
            "description": "<p>Task information.</p>"
          },
          {
            "group": "response",
            "type": "Number",
            "field": "task.id",
            "optional": false,
            "description": "<p>Unique identifier.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "task.name",
            "optional": false,
            "description": "<p>Title field.</p>"
          },
          {
            "group": "response",
            "type": "Object",
            "field": "task.assignee",
            "optional": false,
            "description": "<p>Task assignee.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "task.assignee.id",
            "optional": false,
            "description": "<p>Assignee identifier.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "task.assignee_status",
            "optional": false,
            "description": "<p>Scheduling status of this task for the user it is assigned to. One of the following values: <code>inbox</code>, <code>later</code>, <code>today</code>, <code>upcoming</code>.</p>"
          },
          {
            "group": "response",
            "type": "Date",
            "field": "task.created_at",
            "optional": false,
            "description": "<p>Date created field.</p>"
          },
          {
            "group": "response",
            "type": "Date",
            "field": "task.modified_at",
            "optional": false,
            "description": "<p>Last modified date field.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "task.due_on",
            "optional": false,
            "description": "<p>Due date field.</p>"
          },
          {
            "group": "response",
            "type": "Date",
            "field": "task.completed_at",
            "optional": false,
            "description": "<p>Completed at date field.</p>"
          },
          {
            "group": "response",
            "type": "Boolean",
            "field": "task.completed",
            "optional": false,
            "description": "<p>If task is completed.</p>"
          },
          {
            "group": "response",
            "type": "Object",
            "field": "task.workspace",
            "optional": false,
            "description": "<p>Which workspace this task is connected to.</p>"
          },
          {
            "group": "response",
            "type": "Number",
            "field": "task.workspace.id",
            "optional": false,
            "description": "<p>Connected workspace identifier.</p>"
          },
          {
            "group": "response",
            "type": "Object[]",
            "field": "task.followers",
            "optional": false,
            "description": "<p>List of followers.</p>"
          },
          {
            "group": "response",
            "type": "Object",
            "field": "task.followers.id",
            "optional": false,
            "description": "<p>User identifier.</p>"
          },
          {
            "group": "response",
            "type": "Boolean",
            "field": "task.hearted",
            "optional": false,
            "description": "<p>If task has a heart or not.</p>"
          },
          {
            "group": "response",
            "type": "Object[]",
            "field": "task.hearts",
            "optional": false,
            "description": "<p>Who has given a heart to this task.</p>"
          },
          {
            "group": "response",
            "type": "Number",
            "field": "task.hearts.id",
            "optional": false,
            "description": "<p>User identifier.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "task.hearts.name",
            "optional": false,
            "description": "<p>User name.</p>"
          },
          {
            "group": "response",
            "type": "Number",
            "field": "task.num_hearts",
            "optional": false,
            "description": "<p>Amount of hearts gotten.</p>"
          },
          {
            "group": "response",
            "type": "Object[]",
            "field": "task.projects",
            "optional": false,
            "description": "<p>Which projects are connected to this task.</p>"
          },
          {
            "group": "response",
            "type": "Number",
            "field": "task.projects.id",
            "optional": false,
            "description": "<p>Project identifier.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "task.projects.name",
            "optional": false,
            "description": "<p>Project title.</p>"
          },
          {
            "group": "response",
            "type": "Object[]",
            "field": "task.parent",
            "optional": false,
            "description": "<p>The parent-task of this task.</p>"
          },
          {
            "group": "response",
            "type": "Number",
            "field": "task.parent.id",
            "optional": false,
            "description": "<p>Task identifier.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "task.parent.name",
            "optional": false,
            "description": "<p>Task title.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   [{\n     \"id\": 2345678901,\n     \"name\": \"Task1\",\n     \"assignee\": { id:6789012345 },\n     \"assignee_status\": \"upcoming\",\n     \"created_at\": \"2012-02-22T02:04:58.147Z\",\n     \"modified_at\": \"2012-02-22T02:06:58.147Z\",\n     \"due_on\": \"2012-02-24\",\n     \"completed_at\": \"2012-02-22T02:08:58.147Z\",\n     \"completed\": false,\n     \"hearted\": false,\n     \"hearts\":[ { id:5678901234, name: 'John Doe' } ]\n     \"num_hearts\":1,\n     \"notes\": \"Description of the task\",\n     \"workspace\": { id:3456789012 },\n     \"archived\": \"Team1\",\n     \"followers\":[ { id:5678901234 } ],\n     \"projects\": { id:6789012345, name:'project1'},\n     \"parent\": { id:7890123456, name:'Task22'},\n   }]\n"
        }
      ]
    },
    "filename": "lib/api/task.js"
  },
  {
    "version": "0.6.0",
    "type": "post",
    "url": "api.task.tags();",
    "title": "{}.tags",
    "name": "tags",
    "description": "<p>Retrieve a list of tags connected to a task.</p>",
    "group": "Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "field": "id",
            "optional": false,
            "description": "<p>Task identifier.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "field": "object",
            "optional": false,
            "description": "<p>Options object.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "field": "object.fields",
            "optional": true,
            "description": "<p>Override default return fields : <em>[&#39;assignee&#39;, &#39;assignee_status&#39;, &#39;created_at&#39;, &#39;completed&#39;, &#39;completed_at&#39;, &#39;due_on&#39;, &#39;followers&#39;, &#39;hearted&#39;, &#39;hearts&#39;, &#39;modified_at&#39;, &#39;name&#39;, &#39;notes&#39;, &#39;num_hearts&#39;, &#39;projects&#39;, &#39;parent&#39;, &#39;workspace&#39;]</em></p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Streaming example:",
        "content": "api.task.tags(4567890123).on('readable',function(){\n  console.log('Data:',this.read());\n}).on('end',function(){\n  console.log('Response received.');\n}).on('error',function(err){\n  console.log('An error occurred: ',err);\n});\n"
      },
      {
        "title": "Callback example:",
        "content": "api.task.tags(4567890123,function(err,data){\n    if(err){\n        console.log('An error occurred:',err);\n    }else{\n        console.log('Data:',data);\n    }\n});\n"
      }
    ],
    "success": {
      "fields": {
        "Success response objects ~ Array/Event": [
          {
            "group": "response",
            "type": "Object",
            "field": "tag",
            "optional": false,
            "description": "<p>Tag information.</p>"
          },
          {
            "group": "response",
            "type": "Number",
            "field": "tag.id",
            "optional": false,
            "description": "<p>Unique identifier.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "tag.name",
            "optional": false,
            "description": "<p>Title field.</p>"
          },
          {
            "group": "response",
            "type": "Date",
            "field": "tag.created_at",
            "optional": false,
            "description": "<p>Date created field.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "tag.notes",
            "optional": false,
            "description": "<p>Description field.</p>"
          },
          {
            "group": "response",
            "type": "Object",
            "field": "tag.workspace",
            "optional": false,
            "description": "<p>Which workspace this tag is connected to.</p>"
          },
          {
            "group": "response",
            "type": "Number",
            "field": "tag.workspace.id",
            "optional": false,
            "description": "<p>Connected workspace identifier.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "tag.color",
            "optional": false,
            "description": "<p>Color that is shown in the GUI like <em>dark-pink, dark-green, dark-blue, dark-red, dark-teal, dark-brown, dark-orange, dark-purple, dark-warm-gray, light-pink, light-green, light-blue, light-red, light-teal, light-yellow, light-orange, light-purple, light-warm-gray</em>.</p>"
          },
          {
            "group": "response",
            "type": "Object[]",
            "field": "tag.followers",
            "optional": false,
            "description": "<p>List of followers.</p>"
          },
          {
            "group": "response",
            "type": "Object",
            "field": "tag.followers.id",
            "optional": false,
            "description": "<p>User identifier.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   [{\n     \"id\": 2345678901,\n     \"name\": \"Tag1\",\n     \"created_at\": \"2012-02-22T02:04:58.147Z\",\n     \"notes\": \"Description of the tag\",\n     \"workspace\": { id:3456789012 },\n     \"color\": \"green\",\n     \"followers\":[ { id:5678901234 } ]\n   }]\n"
        }
      ]
    },
    "filename": "lib/api/task.js"
  },
  {
    "version": "0.6.0",
    "type": "put",
    "url": "api.task.update();",
    "title": "{}.update",
    "name": "update",
    "description": "<p>Update a (sub)task.</p>",
    "group": "Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "field": "object",
            "optional": false,
            "description": "<p>Options object.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number/String",
            "field": "object.assignee",
            "optional": true,
            "description": "<p>User identifier or {String} &#39;me&#39;.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "object.assignee_status",
            "optional": true,
            "description": "<p>Scheduling status of this task for the user it is assigned to like <code>inbox</code>, <code>later</code>, <code>today</code>,<code>upcoming</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "field": "object.completed",
            "optional": true,
            "description": "<p>If task is completed or not.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "field": "object.due_on",
            "optional": true,
            "description": "<p>Due date for the task like &#39;2012-03-26&#39;.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "field": "object.hearted",
            "optional": true,
            "description": "<p>If you want to give a heart to the task or not.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "object.name",
            "optional": true,
            "description": "<p>Task name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "object.notes",
            "optional": true,
            "description": "<p>Task description.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "field": "object.fields",
            "optional": true,
            "description": "<p>Override default return fields : <em>[&#39;assignee&#39;, &#39;assignee_status&#39;, &#39;created_at&#39;, &#39;completed&#39;, &#39;completed_at&#39;, &#39;due_on&#39;, &#39;followers&#39;, &#39;hearted&#39;, &#39;hearts&#39;, &#39;modified_at&#39;, &#39;name&#39;, &#39;notes&#39;, &#39;num_hearts&#39;, &#39;projects&#39;, &#39;parent&#39;, &#39;workspace&#39;]</em></p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Streaming example:",
        "content": "api.task.update(4567890123,{name:'Task2'}).on('readable',function(){\n  console.log('Data:',this.read());\n}).on('end',function(){\n  console.log('Response received.');\n}).on('error',function(err){\n  console.log('An error occurred: ',err);\n});\n"
      },
      {
        "title": "Callback example:",
        "content": "api.task.update(4567890123,{name:'Task2'},function(err,data){\n    if(err){\n        console.log('An error occurred:',err);\n    }else{\n        console.log('Data:',data);\n    }\n});\n"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "field": "task",
            "optional": false,
            "description": "<p>Task information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "task.id",
            "optional": false,
            "description": "<p>Unique identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "task.name",
            "optional": false,
            "description": "<p>Title field.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "task.assignee",
            "optional": false,
            "description": "<p>Task assignee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "task.assignee.id",
            "optional": false,
            "description": "<p>Assignee identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "task.assignee_status",
            "optional": false,
            "description": "<p>Scheduling status of this task for the user it is assigned to. One of the following values: <code>inbox</code>, <code>later</code>, <code>today</code>, <code>upcoming</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "task.created_at",
            "optional": false,
            "description": "<p>Date created field.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "task.modified_at",
            "optional": false,
            "description": "<p>Last modified date field.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "task.due_on",
            "optional": false,
            "description": "<p>Due date field.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "task.completed_at",
            "optional": false,
            "description": "<p>Completed at date field.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "field": "task.completed",
            "optional": false,
            "description": "<p>If task is completed.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "task.workspace",
            "optional": false,
            "description": "<p>Which workspace this task is connected to.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "task.workspace.id",
            "optional": false,
            "description": "<p>Connected workspace identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "field": "task.followers",
            "optional": false,
            "description": "<p>List of followers.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "task.followers.id",
            "optional": false,
            "description": "<p>User identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "field": "task.hearted",
            "optional": false,
            "description": "<p>If task has a heart or not.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "field": "task.hearts",
            "optional": false,
            "description": "<p>Who has given a heart to this task.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "task.hearts.id",
            "optional": false,
            "description": "<p>User identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "task.hearts.name",
            "optional": false,
            "description": "<p>User name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "task.num_hearts",
            "optional": false,
            "description": "<p>Amount of hearts gotten.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "field": "task.projects",
            "optional": false,
            "description": "<p>Which projects are connected to this task.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "task.projects.id",
            "optional": false,
            "description": "<p>Project identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "task.projects.name",
            "optional": false,
            "description": "<p>Project title.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "field": "task.parent",
            "optional": false,
            "description": "<p>The parent-task of this task.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "task.parent.id",
            "optional": false,
            "description": "<p>Task identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "task.parent.name",
            "optional": false,
            "description": "<p>Task title.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": 2345678901,\n     \"name\": \"Task1\",\n     \"assignee\": { id:6789012345 },\n     \"assignee_status\": \"upcoming\",\n     \"created_at\": \"2012-02-22T02:04:58.147Z\",\n     \"modified_at\": \"2012-02-22T02:06:58.147Z\",\n     \"due_on\": \"2012-02-24\",\n     \"completed_at\": \"2012-02-22T02:08:58.147Z\",\n     \"completed\": false,\n     \"hearted\": false,\n     \"hearts\":[ { id:5678901234, name: 'John Doe' } ]\n     \"num_hearts\":1,\n     \"notes\": \"Description of the task\",\n     \"workspace\": { id:3456789012 },\n     \"archived\": \"Team1\",\n     \"followers\":[ { id:5678901234 } ],\n     \"projects\": { id:6789012345, name:'project1'},\n     \"parent\": { id:7890123456, name:'Task22'},\n   }\n"
        }
      ]
    },
    "filename": "lib/api/task.js"
  },
  {
    "version": "0.6.0",
    "type": "get",
    "url": "api.team.list();",
    "title": "{}.list / api.teams",
    "name": "list",
    "description": "<p>Retrieve a list of (filtered) teams.</p>",
    "group": "Team",
    "groupDescription": "<p>A team is used to group related projects and people together within an organization.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "field": "id",
            "optional": false,
            "description": "<p>Organization identifier.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "field": "object",
            "optional": true,
            "description": "<p>Options object.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "field": "object.fields",
            "optional": true,
            "description": "<p>Override default return fields : <em>[&#39;name&#39;]</em></p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Streaming example:",
        "content": "api.team.list(1234567890).on('readable',function(){\n  console.log('Data:',this.read());\n}).on('end',function(){\n  console.log('Response received.');\n}).on('error',function(err){\n  console.log('An error occurred: ',err);\n});\n"
      },
      {
        "title": "Callback example:",
        "content": "api.team.list(1234567890,function(err,data){\n    if(err){\n        console.log('An error occurred:',err);\n    }else{\n        console.log('Data:',data);\n    }\n});\n"
      }
    ],
    "success": {
      "fields": {
        "Success response objects ~ Array/Event": [
          {
            "group": "response",
            "type": "Object",
            "field": "team",
            "optional": false,
            "description": "<p>Team information.</p>"
          },
          {
            "group": "response",
            "type": "Number",
            "field": "team.id",
            "optional": false,
            "description": "<p>Team identifier.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "team.name",
            "optional": false,
            "description": "<p>Title field.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   [{\n     \"id\": 2345678901,\n     \"name\": \"Team1\"\n   },\n   {\n     \"id\": 2345678091,\n     \"name\": \"Team2\"\n   }]\n"
        }
      ]
    },
    "filename": "lib/api/team.js"
  },
  {
    "version": "0.6.0",
    "type": "get",
    "url": "api.typeahead.search();",
    "title": "{}.search",
    "name": "search",
    "description": "<p>Typeahead functionality with focus on speed and not features (pagination) in a single workspace.</p>",
    "group": "Typeahead",
    "groupDescription": "<p>The typeahead search API allows you to query for objects from a single workspace and retrieves read only information that can be used for creating auto-completion/typeahead search.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "field": "id",
            "optional": false,
            "description": "<p>Workspace identifier.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "field": "object",
            "optional": false,
            "description": "<p>Options object.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "object.type",
            "optional": false,
            "description": "<p>Possible values are: <code>project</code>, <code>user</code>, <code>task</code>, or <code>tag</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "object.query",
            "optional": false,
            "description": "<p>Value to search for.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "object.count",
            "optional": true,
            "description": "<p>Number of items to return. No pagination available. (1 - 100)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Streaming example:",
        "content": "api.typeahead.search(123456789,{type:'user',query:'John',count:10}).on('readable',function(){\n  console.log('Data:',this.read());\n}).on('end',function(){\n  console.log('Response received.');\n}).on('error',function(err){\n  console.log('An error occurred: ',err);\n});\n"
      },
      {
        "title": "Callback example:",
        "content": "api.typeahead.search(123456789,{type:'user',query:'John',count:10},function(err,data){\n    if(err){\n        console.log('An error occurred:',err);\n    }else{\n        console.log('Data:',data);\n    }\n});\n"
      }
    ],
    "success": {
      "fields": {
        "Success response objects ~ Array/Event": [
          {
            "group": "response",
            "type": "Object",
            "field": "object",
            "optional": false,
            "description": "<p>Match information.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "object.id",
            "optional": false,
            "description": "<p>Match identifier.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "object.name",
            "optional": false,
            "description": "<p>Title field.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   [{\n     \"id\": 1234567890,\n     \"name\": \"John Doe\"\n   }]\n"
        }
      ]
    },
    "filename": "lib/api/typeahead.js"
  },
  {
    "version": "0.6.0",
    "type": "get",
    "url": "api.user.id();",
    "title": "{}.id",
    "name": "id",
    "description": "<p>Retrieve a single user.</p>",
    "group": "User",
    "groupDescription": "<p>A user object represents an account in Asana that can be given access to various workspaces, projects, and tasks.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "field": "id",
            "optional": false,
            "description": "<p>User identifier.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "field": "object",
            "optional": true,
            "description": "<p>Options object.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "field": "object.fields",
            "optional": true,
            "description": "<p>Override default return fields : <em>[&#39;name&#39;,&#39;email&#39;,&#39;photo&#39;,&#39;workspaces&#39;]</em></p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Streaming example:",
        "content": "api.user.id(1234567890).on('readable',function(){\n  console.log('Data:',this.read());\n}).on('end',function(){\n  console.log('Response received.');\n}).on('error',function(err){\n  console.log('An error occurred: ',err);\n});\n"
      },
      {
        "title": "Callback example:",
        "content": "api.user.id(1234567890,function(err,data){\n    if(err){\n        console.log('An error occurred:',err);\n    }else{\n        console.log('Data:',data);\n    }\n});\n"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "field": "user",
            "optional": false,
            "description": "<p>User information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "user.id",
            "optional": false,
            "description": "<p>User identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "user.name",
            "optional": false,
            "description": "<p>Title field.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "user.email",
            "optional": false,
            "description": "<p>E-mail address.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "user.photo",
            "optional": false,
            "description": "<p>5 urls (object properties) with profile photos.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "field": "user.workspaces",
            "optional": false,
            "description": "<p>All workspaces this user is connected with.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": 1234567890,\n     \"name\": \"John Doe\",\n     \"email\": \"john@doe.com\",\n     \"photo\": { image_21x21: 'https://s3.amazonaws.com/profile_photos/1234567890.7d86a9s7d6sa87d7a896da7878_21x21.png',\n                image_27x27: 'https://s3.amazonaws.com/profile_photos/1234567890.7d86a9s7d6sa87d7a896da7878_27x27.png',\n                image_36x36: 'https://s3.amazonaws.com/profile_photos/1234567890.7d86a9s7d6sa87d7a896da7878_36x36.png',\n                image_60x60: 'https://s3.amazonaws.com/profile_photos/1234567890.7d86a9s7d6sa87d7a896da7878_60x60.png',\n                image_128x128: 'https://s3.amazonaws.com/profile_photos/1234567890.7d86a9s7d6sa87d7a896da7878_128x128.png' },\n     \"workspaces\" : [ { id: 234567891 }, { id: 345678941 }]\n   }\n"
        }
      ]
    },
    "filename": "lib/api/user.js"
  },
  {
    "version": "0.0.1",
    "type": "get",
    "url": "api.user.list();",
    "title": "{}.list",
    "name": "list",
    "description": "<p>Retrieve a list of (filtered) users.</p>",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "field": "object",
            "optional": true,
            "description": "<p>Options object.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "field": "object.fields",
            "optional": true,
            "description": "<p>Override default return fields : <em>[&#39;name&#39;,&#39;email&#39;,&#39;photo&#39;,&#39;workspaces&#39;]</em></p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "object.workspace",
            "optional": true,
            "description": "<p>Workspace identifier to search users in a particular workspace.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Streaming example:",
        "content": "api.user.list().on('readable',function(){\n  console.log('Data:',this.read());\n}).on('end',function(){\n  console.log('Response received.');\n}).on('error',function(err){\n  console.log('An error occurred: ',err);\n});\n"
      },
      {
        "title": "Streaming workspace example:",
        "content": "api.user.list({workspace:0123456789}).on('readable',function(){\n  console.log('Data:',this.read());\n}).on('end',function(){\n  console.log('Response received.');\n}).on('error',function(err){\n  console.log('An error occurred: ',err);\n});\n"
      },
      {
        "title": "Callback example:",
        "content": "api.user.list(function(err,data){\n    if(err){\n        console.log('An error occurred:',err);\n    }else{\n        console.log('Data:',data);\n    }\n});\n"
      }
    ],
    "success": {
      "fields": {
        "Success response objects ~ Array/Event": [
          {
            "group": "response",
            "type": "Object",
            "field": "user",
            "optional": false,
            "description": "<p>User information.</p>"
          },
          {
            "group": "response",
            "type": "Number",
            "field": "user.id",
            "optional": false,
            "description": "<p>User identifier.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "user.name",
            "optional": false,
            "description": "<p>Title field.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "user.email",
            "optional": false,
            "description": "<p>E-mail address.</p>"
          },
          {
            "group": "response",
            "type": "Object",
            "field": "user.photo",
            "optional": false,
            "description": "<p>5 urls (object properties) with profile photos.</p>"
          },
          {
            "group": "response",
            "type": "Object[]",
            "field": "user.workspaces",
            "optional": false,
            "description": "<p>All workspaces this user is connected with.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   [{\n     \"id\": 1234567890,\n     \"name\": \"John Doe\",\n     \"email\": \"john@doe.com\",\n     \"photo\": { image_21x21: 'https://s3.amazonaws.com/profile_photos/1234567890.7d86a9s7d6sa87d7a896da7878_21x21.png',\n                image_27x27: 'https://s3.amazonaws.com/profile_photos/1234567890.7d86a9s7d6sa87d7a896da7878_27x27.png',\n                image_36x36: 'https://s3.amazonaws.com/profile_photos/1234567890.7d86a9s7d6sa87d7a896da7878_36x36.png',\n                image_60x60: 'https://s3.amazonaws.com/profile_photos/1234567890.7d86a9s7d6sa87d7a896da7878_60x60.png',\n                image_128x128: 'https://s3.amazonaws.com/profile_photos/1234567890.7d86a9s7d6sa87d7a896da7878_128x128.png' },\n     \"workspaces\" : [ { id: 234567891 }, { id: 345678941 }]\n   }]\n"
        }
      ]
    },
    "filename": "lib/api/user.js"
  },
  {
    "version": "0.6.0",
    "type": "get",
    "url": "api.user.me();",
    "title": "{}.me",
    "name": "me",
    "description": "<p>Retrieve myself.</p>",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "field": "object",
            "optional": true,
            "description": "<p>Options object.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "field": "object.fields",
            "optional": true,
            "description": "<p>Override default return fields : <em>[&#39;name&#39;,&#39;email&#39;,&#39;photo&#39;,&#39;workspaces&#39;]</em></p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Streaming example:",
        "content": "api.user.me().on('readable',function(){\n  console.log('Data:',this.read());\n}).on('end',function(){\n  console.log('Response received.');\n}).on('error',function(err){\n  console.log('An error occurred: ',err);\n});\n"
      },
      {
        "title": "Callback example:",
        "content": "api.user.me(function(err,data){\n    if(err){\n        console.log('An error occurred:',err);\n    }else{\n        console.log('Data:',data);\n    }\n});\n"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "field": "user",
            "optional": false,
            "description": "<p>User information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "user.id",
            "optional": false,
            "description": "<p>User identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "user.name",
            "optional": false,
            "description": "<p>Title field.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "user.email",
            "optional": false,
            "description": "<p>E-mail address.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "user.photo",
            "optional": false,
            "description": "<p>5 urls (object properties) with profile photos.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "field": "user.workspaces",
            "optional": false,
            "description": "<p>All workspaces this user is connected with.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": 1234567890,\n     \"name\": \"John Doe\",\n     \"email\": \"john@doe.com\",\n     \"photo\": { image_21x21: 'https://s3.amazonaws.com/profile_photos/1234567890.7d86a9s7d6sa87d7a896da7878_21x21.png',\n                image_27x27: 'https://s3.amazonaws.com/profile_photos/1234567890.7d86a9s7d6sa87d7a896da7878_27x27.png',\n                image_36x36: 'https://s3.amazonaws.com/profile_photos/1234567890.7d86a9s7d6sa87d7a896da7878_36x36.png',\n                image_60x60: 'https://s3.amazonaws.com/profile_photos/1234567890.7d86a9s7d6sa87d7a896da7878_60x60.png',\n                image_128x128: 'https://s3.amazonaws.com/profile_photos/1234567890.7d86a9s7d6sa87d7a896da7878_128x128.png' },\n     \"workspaces\" : [ { id: 234567891 }, { id: 345678941 }]\n   }\n"
        }
      ]
    },
    "filename": "lib/api/user.js"
  },
  {
    "version": "0.6.0",
    "type": "get",
    "url": "api.workspace.list();",
    "title": "{}.list / api.workspaces",
    "name": "list",
    "description": "<p>Retrieve a list of (filtered) workspaces.</p>",
    "group": "Workspace",
    "groupDescription": "<p>A workspace is the most basic organizational unit in Asana. All projects and tasks have an associated workspace.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "field": "object",
            "optional": true,
            "description": "<p>Options object.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "field": "object.fields",
            "optional": true,
            "description": "<p>Override default return fields : <em>[&#39;name&#39;,&#39;is_organization&#39;]</em></p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Streaming example:",
        "content": "api.workspace.list().on('readable',function(){\n  console.log('Data:',this.read());\n}).on('end',function(){\n  console.log('Response received.');\n}).on('error',function(err){\n  console.log('An error occurred: ',err);\n});\n"
      },
      {
        "title": "Callback example:",
        "content": "api.workspace.list(function(err,data){\n    if(err){\n        console.log('An error occurred:',err);\n    }else{\n        console.log('Data:',data);\n    }\n});\n"
      }
    ],
    "success": {
      "fields": {
        "Success response objects ~ Array/Event": [
          {
            "group": "response",
            "type": "Object",
            "field": "workspace",
            "optional": false,
            "description": "<p>Workspace information.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "workspace.id",
            "optional": false,
            "description": "<p>Workspace identifier.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "workspace.name",
            "optional": false,
            "description": "<p>Title field.</p>"
          },
          {
            "group": "response",
            "type": "Boolean",
            "field": "workspace.is_organization",
            "optional": false,
            "description": "<p>If the workspace is an Organization (a workspace with extra functionality).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   [{\n     \"id\": 1234567890,\n     \"name\": \"John Doe\",\n     \"is_organization\": false\n   }]\n"
        }
      ]
    },
    "filename": "lib/api/workspace.js"
  },
  {
    "version": "0.6.0",
    "type": "put",
    "url": "api.workspace.update();",
    "title": "{}.update",
    "name": "update",
    "description": "<p>Update a workspace title.</p>",
    "group": "Workspace",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "field": "id",
            "optional": false,
            "description": "<p>Workspace identifier.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "field": "object",
            "optional": false,
            "description": "<p>Options object.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "object.name",
            "optional": false,
            "description": "<p>The new title of the workspace.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "field": "object.fields",
            "optional": true,
            "description": "<p>Override default return fields : <em>[&#39;name&#39;,&#39;is_organization&#39;]</em></p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Streaming example:",
        "content": "api.workspace.update(1234567890,{name:'new title'}).on('readable',function(){\n  console.log('Data:',this.read());\n}).on('end',function(){\n  console.log('Response received.');\n}).on('error',function(err){\n  console.log('An error occurred: ',err);\n});\n"
      },
      {
        "title": "Callback example:",
        "content": "api.workspace.update(1234567890,{name:'new title'},function(err,data){\n    if(err){\n        console.log('An error occurred:',err);\n    }else{\n        console.log('Data:',data);\n    }\n});\n"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "field": "workspace",
            "optional": false,
            "description": "<p>Workspace information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "workspace.id",
            "optional": false,
            "description": "<p>Workspace identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "workspace.name",
            "optional": false,
            "description": "<p>Title field.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "field": "workspace.is_organization",
            "optional": false,
            "description": "<p>If the workspace is an Organization (a workspace with extra functionality).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": 1234567890,\n     \"name\": \"New Title\"\n     \"is_organization\": false\n   }\n"
        }
      ]
    },
    "filename": "lib/api/workspace.js"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "field": "object",
            "optional": false,
            "description": "<p>Empty object, so request succeeded.</p>"
          }
        ]
      }
    },
    "group": "definitions_js",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "lib/docs/definitions.js"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "field": "user",
            "optional": false,
            "description": "<p>User information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "user.id",
            "optional": false,
            "description": "<p>User identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "user.name",
            "optional": false,
            "description": "<p>Title field.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "user.email",
            "optional": false,
            "description": "<p>E-mail address.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "user.photo",
            "optional": false,
            "description": "<p>5 urls (object properties) with profile photos.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "field": "user.workspaces",
            "optional": false,
            "description": "<p>All workspaces this user is connected with.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": 1234567890,\n     \"name\": \"John Doe\",\n     \"email\": \"john@doe.com\",\n     \"photo\": { image_21x21: 'https://s3.amazonaws.com/profile_photos/1234567890.7d86a9s7d6sa87d7a896da7878_21x21.png',\n                image_27x27: 'https://s3.amazonaws.com/profile_photos/1234567890.7d86a9s7d6sa87d7a896da7878_27x27.png',\n                image_36x36: 'https://s3.amazonaws.com/profile_photos/1234567890.7d86a9s7d6sa87d7a896da7878_36x36.png',\n                image_60x60: 'https://s3.amazonaws.com/profile_photos/1234567890.7d86a9s7d6sa87d7a896da7878_60x60.png',\n                image_128x128: 'https://s3.amazonaws.com/profile_photos/1234567890.7d86a9s7d6sa87d7a896da7878_128x128.png' },\n     \"workspaces\" : [ { id: 234567891 }, { id: 345678941 }]\n   }\n"
        }
      ]
    },
    "group": "definitions_js",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "lib/docs/definitions.js"
  },
  {
    "success": {
      "fields": {
        "Success response objects ~ Array/Event": [
          {
            "group": "response",
            "type": "Object",
            "field": "user",
            "optional": false,
            "description": "<p>User information.</p>"
          },
          {
            "group": "response",
            "type": "Number",
            "field": "user.id",
            "optional": false,
            "description": "<p>User identifier.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "user.name",
            "optional": false,
            "description": "<p>Title field.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "user.email",
            "optional": false,
            "description": "<p>E-mail address.</p>"
          },
          {
            "group": "response",
            "type": "Object",
            "field": "user.photo",
            "optional": false,
            "description": "<p>5 urls (object properties) with profile photos.</p>"
          },
          {
            "group": "response",
            "type": "Object[]",
            "field": "user.workspaces",
            "optional": false,
            "description": "<p>All workspaces this user is connected with.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   [{\n     \"id\": 1234567890,\n     \"name\": \"John Doe\",\n     \"email\": \"john@doe.com\",\n     \"photo\": { image_21x21: 'https://s3.amazonaws.com/profile_photos/1234567890.7d86a9s7d6sa87d7a896da7878_21x21.png',\n                image_27x27: 'https://s3.amazonaws.com/profile_photos/1234567890.7d86a9s7d6sa87d7a896da7878_27x27.png',\n                image_36x36: 'https://s3.amazonaws.com/profile_photos/1234567890.7d86a9s7d6sa87d7a896da7878_36x36.png',\n                image_60x60: 'https://s3.amazonaws.com/profile_photos/1234567890.7d86a9s7d6sa87d7a896da7878_60x60.png',\n                image_128x128: 'https://s3.amazonaws.com/profile_photos/1234567890.7d86a9s7d6sa87d7a896da7878_128x128.png' },\n     \"workspaces\" : [ { id: 234567891 }, { id: 345678941 }]\n   }]\n"
        }
      ]
    },
    "group": "definitions_js",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "lib/docs/definitions.js"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "field": "attachment",
            "optional": false,
            "description": "<p>Attachment information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "attachment.id",
            "optional": false,
            "description": "<p>Unique identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "attachment.name",
            "optional": false,
            "description": "<p>Name of the file.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "attachment.created_at",
            "optional": false,
            "description": "<p>Date created field.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "attachment.download_url",
            "optional": false,
            "description": "<p>The URL containing the content of the file. Due to processing don&#39;t persist this URL in your code, while it may change after it is processed.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "attachment.host",
            "optional": false,
            "description": "<p>Which service is hosting the file: <code>asana</code>, <code>dropbox</code>, <code>gdrive</code> or <code>box</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "attachment.parent",
            "optional": false,
            "description": "<p>The parent task of the file.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "attachment.parent.id",
            "optional": false,
            "description": "<p>Task identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "attachment.view_url",
            "optional": false,
            "description": "<p>The URL where the file can be viewed. Browser optimized and not just a download URL.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": 2345678901,\n     \"name\": \"File1.png\",\n     \"created_at\": \"2012-02-22T02:04:58.147Z\",\n     \"download_url\": \"https://www.dropbox.com/s/123/File1.png?dl=1\",\n     \"host\": \"dropbox\",\n     \"parent\": [ { id:4567890123 } ],\n     \"view_url\": \"https://www.dropbox.com/s/123/File1.png\",\n   }\n"
        }
      ]
    },
    "group": "definitions_js",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "lib/docs/definitions.js"
  },
  {
    "success": {
      "fields": {
        "Success response objects ~ Array/Event": [
          {
            "group": "response",
            "type": "Object",
            "field": "attachment",
            "optional": false,
            "description": "<p>Attachment information.</p>"
          },
          {
            "group": "response",
            "type": "Number",
            "field": "attachment.id",
            "optional": false,
            "description": "<p>Unique identifier.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "attachment.name",
            "optional": false,
            "description": "<p>Name of the file.</p>"
          },
          {
            "group": "response",
            "type": "Date",
            "field": "attachment.created_at",
            "optional": false,
            "description": "<p>Date created field.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "attachment.download_url",
            "optional": false,
            "description": "<p>The URL containing the content of the file. Due to processing don&#39;t persist this URL in your code, while it may change after it is processed.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "attachment.host",
            "optional": false,
            "description": "<p>Which service is hosting the file: <code>asana</code>, <code>dropbox</code>, <code>gdrive</code> or <code>box</code>.</p>"
          },
          {
            "group": "response",
            "type": "Object",
            "field": "attachment.parent",
            "optional": false,
            "description": "<p>The parent task of the file.</p>"
          },
          {
            "group": "response",
            "type": "Number",
            "field": "attachment.parent.id",
            "optional": false,
            "description": "<p>Task identifier.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "attachment.view_url",
            "optional": false,
            "description": "<p>The URL where the file can be viewed. Browser optimized and not just a download URL.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   [{\n     \"id\": 2345678901,\n     \"name\": \"File1.png\",\n     \"created_at\": \"2012-02-22T02:04:58.147Z\",\n     \"download_url\": \"https://www.dropbox.com/s/123/File1.png?dl=1\",\n     \"host\": \"dropbox\",\n     \"parent\": [ { id:4567890123 } ],\n     \"view_url\": \"https://www.dropbox.com/s/123/File1.png\",\n   }]\n"
        }
      ]
    },
    "group": "definitions_js",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "lib/docs/definitions.js"
  },
  {
    "success": {
      "fields": {
        "Success response objects ~ Array/Event": [
          {
            "group": "response",
            "type": "Object",
            "field": "task",
            "optional": false,
            "description": "<p>Task information.</p>"
          },
          {
            "group": "response",
            "type": "Number",
            "field": "task.id",
            "optional": false,
            "description": "<p>Unique identifier.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "task.name",
            "optional": false,
            "description": "<p>Title field.</p>"
          },
          {
            "group": "response",
            "type": "Object",
            "field": "task.assignee",
            "optional": false,
            "description": "<p>Task assignee.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "task.assignee.id",
            "optional": false,
            "description": "<p>Assignee identifier.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "task.assignee_status",
            "optional": false,
            "description": "<p>Scheduling status of this task for the user it is assigned to. One of the following values: <code>inbox</code>, <code>later</code>, <code>today</code>, <code>upcoming</code>.</p>"
          },
          {
            "group": "response",
            "type": "Date",
            "field": "task.created_at",
            "optional": false,
            "description": "<p>Date created field.</p>"
          },
          {
            "group": "response",
            "type": "Date",
            "field": "task.modified_at",
            "optional": false,
            "description": "<p>Last modified date field.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "task.due_on",
            "optional": false,
            "description": "<p>Due date field.</p>"
          },
          {
            "group": "response",
            "type": "Date",
            "field": "task.completed_at",
            "optional": false,
            "description": "<p>Completed at date field.</p>"
          },
          {
            "group": "response",
            "type": "Boolean",
            "field": "task.completed",
            "optional": false,
            "description": "<p>If task is completed.</p>"
          },
          {
            "group": "response",
            "type": "Object",
            "field": "task.workspace",
            "optional": false,
            "description": "<p>Which workspace this task is connected to.</p>"
          },
          {
            "group": "response",
            "type": "Number",
            "field": "task.workspace.id",
            "optional": false,
            "description": "<p>Connected workspace identifier.</p>"
          },
          {
            "group": "response",
            "type": "Object[]",
            "field": "task.followers",
            "optional": false,
            "description": "<p>List of followers.</p>"
          },
          {
            "group": "response",
            "type": "Object",
            "field": "task.followers.id",
            "optional": false,
            "description": "<p>User identifier.</p>"
          },
          {
            "group": "response",
            "type": "Boolean",
            "field": "task.hearted",
            "optional": false,
            "description": "<p>If task has a heart or not.</p>"
          },
          {
            "group": "response",
            "type": "Object[]",
            "field": "task.hearts",
            "optional": false,
            "description": "<p>Who has given a heart to this task.</p>"
          },
          {
            "group": "response",
            "type": "Number",
            "field": "task.hearts.id",
            "optional": false,
            "description": "<p>User identifier.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "task.hearts.name",
            "optional": false,
            "description": "<p>User name.</p>"
          },
          {
            "group": "response",
            "type": "Number",
            "field": "task.num_hearts",
            "optional": false,
            "description": "<p>Amount of hearts gotten.</p>"
          },
          {
            "group": "response",
            "type": "Object[]",
            "field": "task.projects",
            "optional": false,
            "description": "<p>Which projects are connected to this task.</p>"
          },
          {
            "group": "response",
            "type": "Number",
            "field": "task.projects.id",
            "optional": false,
            "description": "<p>Project identifier.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "task.projects.name",
            "optional": false,
            "description": "<p>Project title.</p>"
          },
          {
            "group": "response",
            "type": "Object[]",
            "field": "task.parent",
            "optional": false,
            "description": "<p>The parent-task of this task.</p>"
          },
          {
            "group": "response",
            "type": "Number",
            "field": "task.parent.id",
            "optional": false,
            "description": "<p>Task identifier.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "task.parent.name",
            "optional": false,
            "description": "<p>Task title.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   [{\n     \"id\": 2345678901,\n     \"name\": \"Task1\",\n     \"assignee\": { id:6789012345 },\n     \"assignee_status\": \"upcoming\",\n     \"created_at\": \"2012-02-22T02:04:58.147Z\",\n     \"modified_at\": \"2012-02-22T02:06:58.147Z\",\n     \"due_on\": \"2012-02-24\",\n     \"completed_at\": \"2012-02-22T02:08:58.147Z\",\n     \"completed\": false,\n     \"hearted\": false,\n     \"hearts\":[ { id:5678901234, name: 'John Doe' } ]\n     \"num_hearts\":1,\n     \"notes\": \"Description of the task\",\n     \"workspace\": { id:3456789012 },\n     \"archived\": \"Team1\",\n     \"followers\":[ { id:5678901234 } ],\n     \"projects\": { id:6789012345, name:'project1'},\n     \"parent\": { id:7890123456, name:'Task22'},\n   }]\n"
        }
      ]
    },
    "group": "definitions_js",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "lib/docs/definitions.js"
  },
  {
    "success": {
      "fields": {
        "Success response objects ~ Array/Event": [
          {
            "group": "response",
            "type": "Object",
            "field": "story",
            "optional": false,
            "description": "<p>Story information.</p>"
          },
          {
            "group": "response",
            "type": "Number",
            "field": "story.id",
            "optional": false,
            "description": "<p>Unique identifier.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "story.text",
            "optional": false,
            "description": "<p>Description field.</p>"
          },
          {
            "group": "response",
            "type": "Date",
            "field": "story.created_at",
            "optional": false,
            "description": "<p>Date created field.</p>"
          },
          {
            "group": "response",
            "type": "Object",
            "field": "story.created_by",
            "optional": false,
            "description": "<p>Creator.</p>"
          },
          {
            "group": "response",
            "type": "Number",
            "field": "story.created_by.id",
            "optional": false,
            "description": "<p>User identifier.</p>"
          },
          {
            "group": "response",
            "type": "Boolean",
            "field": "story.hearted",
            "optional": true,
            "description": "<p>If story has been hearted by me.</p>"
          },
          {
            "group": "response",
            "type": "Object[]",
            "field": "story.hearts",
            "optional": true,
            "description": "<p>List of users that hearted this story.</p>"
          },
          {
            "group": "response",
            "type": "Number",
            "field": "story.hearts.id",
            "optional": true,
            "description": "<p>User identifier.</p>"
          },
          {
            "group": "response",
            "type": "Number",
            "field": "story.num_hearts",
            "optional": true,
            "description": "<p>Amount of hearts this story has gotten.</p>"
          },
          {
            "group": "response",
            "type": "Object",
            "field": "story.target",
            "optional": false,
            "description": "<p>Task this story is connected to.</p>"
          },
          {
            "group": "response",
            "type": "Number",
            "field": "story.target.id",
            "optional": false,
            "description": "<p>Task identifier.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "story.source",
            "optional": false,
            "description": "<p>Triggered through <code>web</code>, <code>email</code>, <code>mobile</code>, <code>api</code> or <code>unknown</code>.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "story.type",
            "optional": false,
            "description": "<p>Valid values are <code>comment</code> or <code>system</code>.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   [{\n     \"id\": 2345678901,\n     \"name\": \"Tag1\",\n     \"created_at\": \"2012-02-22T02:04:58.147Z\",\n     \"created_by\": { id:1234567890 },\n     \"text\": \"The story itself\",\n     \"hearted\": false,\n     \"hearts\": [ { id:4567890123 } ],\n     \"num_hearts\": 1,\n     \"target\": [ { id:4567890123 } ],\n     \"source\": \"web\",\n     \"type\": \"comment\"\n   }]\n"
        }
      ]
    },
    "group": "definitions_js",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "lib/docs/definitions.js"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "field": "tag",
            "optional": false,
            "description": "<p>Tag information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "tag.id",
            "optional": false,
            "description": "<p>Unique identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "tag.name",
            "optional": false,
            "description": "<p>Title field.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "tag.created_at",
            "optional": false,
            "description": "<p>Date created field.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "tag.notes",
            "optional": false,
            "description": "<p>Description field.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "tag.workspace",
            "optional": false,
            "description": "<p>Which workspace this tag is connected to.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "tag.workspace.id",
            "optional": false,
            "description": "<p>Connected workspace identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "tag.color",
            "optional": false,
            "description": "<p>Color that is shown in the GUI like <em>dark-pink, dark-green, dark-blue, dark-red, dark-teal, dark-brown, dark-orange, dark-purple, dark-warm-gray, light-pink, light-green, light-blue, light-red, light-teal, light-yellow, light-orange, light-purple, light-warm-gray</em>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "field": "tag.followers",
            "optional": false,
            "description": "<p>List of followers.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "tag.followers.id",
            "optional": false,
            "description": "<p>User identifier.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": 2345678901,\n     \"name\": \"Tag1\",\n     \"created_at\": \"2012-02-22T02:04:58.147Z\",\n     \"notes\": \"Description of the tag\",\n     \"workspace\": { id:3456789012 },\n     \"color\": \"green\",\n     \"followers\":[ { id:5678901234 } ]\n   }\n"
        }
      ]
    },
    "group": "definitions_js",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "lib/docs/definitions.js"
  },
  {
    "success": {
      "fields": {
        "Success response objects ~ Array/Event": [
          {
            "group": "response",
            "type": "Object",
            "field": "tag",
            "optional": false,
            "description": "<p>Tag information.</p>"
          },
          {
            "group": "response",
            "type": "Number",
            "field": "tag.id",
            "optional": false,
            "description": "<p>Unique identifier.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "tag.name",
            "optional": false,
            "description": "<p>Title field.</p>"
          },
          {
            "group": "response",
            "type": "Date",
            "field": "tag.created_at",
            "optional": false,
            "description": "<p>Date created field.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "tag.notes",
            "optional": false,
            "description": "<p>Description field.</p>"
          },
          {
            "group": "response",
            "type": "Object",
            "field": "tag.workspace",
            "optional": false,
            "description": "<p>Which workspace this tag is connected to.</p>"
          },
          {
            "group": "response",
            "type": "Number",
            "field": "tag.workspace.id",
            "optional": false,
            "description": "<p>Connected workspace identifier.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "tag.color",
            "optional": false,
            "description": "<p>Color that is shown in the GUI like <em>dark-pink, dark-green, dark-blue, dark-red, dark-teal, dark-brown, dark-orange, dark-purple, dark-warm-gray, light-pink, light-green, light-blue, light-red, light-teal, light-yellow, light-orange, light-purple, light-warm-gray</em>.</p>"
          },
          {
            "group": "response",
            "type": "Object[]",
            "field": "tag.followers",
            "optional": false,
            "description": "<p>List of followers.</p>"
          },
          {
            "group": "response",
            "type": "Object",
            "field": "tag.followers.id",
            "optional": false,
            "description": "<p>User identifier.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   [{\n     \"id\": 2345678901,\n     \"name\": \"Tag1\",\n     \"created_at\": \"2012-02-22T02:04:58.147Z\",\n     \"notes\": \"Description of the tag\",\n     \"workspace\": { id:3456789012 },\n     \"color\": \"green\",\n     \"followers\":[ { id:5678901234 } ]\n   }]\n"
        }
      ]
    },
    "group": "definitions_js",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "lib/docs/definitions.js"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "field": "project",
            "optional": false,
            "description": "<p>Project information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "project.id",
            "optional": false,
            "description": "<p>Unique identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "project.name",
            "optional": false,
            "description": "<p>Title field.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "project.created_at",
            "optional": false,
            "description": "<p>Date created field.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "project.modified_at",
            "optional": false,
            "description": "<p>Last modified date field.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "project.notes",
            "optional": false,
            "description": "<p>Description field.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "field": "project.archived",
            "optional": false,
            "description": "<p>If archived (not visible anymore).</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "project.workspace",
            "optional": false,
            "description": "<p>Which workspace this project is connected to.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "project.workspace.id",
            "optional": false,
            "description": "<p>Connected workspace identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "project.team",
            "optional": false,
            "description": "<p>Which team this project is connected to.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "project.team.id",
            "optional": false,
            "description": "<p>Connected team identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "project.color",
            "optional": false,
            "description": "<p>Color that is shown in the GUI like <em>dark-pink, dark-green, dark-blue, dark-red, dark-teal, dark-brown, dark-orange, dark-purple, dark-warm-gray, light-pink, light-green, light-blue, light-red, light-teal, light-yellow, light-orange, light-purple, light-warm-gray</em>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "field": "project.followers",
            "optional": false,
            "description": "<p>List of followers.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "project.followers.id",
            "optional": false,
            "description": "<p>User identifier.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": 2345678901,\n     \"name\": \"Project1\",\n     \"created_at\": \"2012-02-22T02:04:58.147Z\",\n     \"modified_at\": \"2012-02-22T02:06:58.147Z\",\n     \"notes\": \"Description of the project\",\n     \"archived\": false,\n     \"workspace\": { id:3456789012 },\n     \"archived\": \"Team1\",\n     \"color\": \"green\",\n     \"team\": { id:4567890123 },\n     \"followers\":[ { id:5678901234 } ]\n   }\n"
        }
      ]
    },
    "group": "definitions_js",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "lib/docs/definitions.js"
  },
  {
    "success": {
      "fields": {
        "Success response objects ~ Array/Event": [
          {
            "group": "response",
            "type": "Object",
            "field": "project",
            "optional": false,
            "description": "<p>Project information.</p>"
          },
          {
            "group": "response",
            "type": "Number",
            "field": "project.id",
            "optional": false,
            "description": "<p>Unique identifier.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "project.name",
            "optional": false,
            "description": "<p>Title field.</p>"
          },
          {
            "group": "response",
            "type": "Date",
            "field": "project.created_at",
            "optional": false,
            "description": "<p>Date created field.</p>"
          },
          {
            "group": "response",
            "type": "Date",
            "field": "project.modified_at",
            "optional": false,
            "description": "<p>Last modified date field.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "project.notes",
            "optional": false,
            "description": "<p>Description field.</p>"
          },
          {
            "group": "response",
            "type": "Boolean",
            "field": "project.archived",
            "optional": false,
            "description": "<p>If archived (not visible anymore).</p>"
          },
          {
            "group": "response",
            "type": "Object",
            "field": "project.workspace",
            "optional": false,
            "description": "<p>Which workspace this project is connected to.</p>"
          },
          {
            "group": "response",
            "type": "Number",
            "field": "project.workspace.id",
            "optional": false,
            "description": "<p>Connected workspace identifier.</p>"
          },
          {
            "group": "response",
            "type": "Object",
            "field": "project.team",
            "optional": false,
            "description": "<p>Which team this project is connected to.</p>"
          },
          {
            "group": "response",
            "type": "Number",
            "field": "project.team.id",
            "optional": false,
            "description": "<p>Connected team identifier.</p>"
          },
          {
            "group": "response",
            "type": "String",
            "field": "project.color",
            "optional": false,
            "description": "<p>Color that is shown in the GUI like <em>dark-pink, dark-green, dark-blue, dark-red, dark-teal, dark-brown, dark-orange, dark-purple, dark-warm-gray, light-pink, light-green, light-blue, light-red, light-teal, light-yellow, light-orange, light-purple, light-warm-gray</em>.</p>"
          },
          {
            "group": "response",
            "type": "Object[]",
            "field": "project.followers",
            "optional": false,
            "description": "<p>List of followers.</p>"
          },
          {
            "group": "response",
            "type": "Object",
            "field": "project.followers.id",
            "optional": false,
            "description": "<p>User identifier.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   [{\n     \"id\": 2345678901,\n     \"name\": \"Project1\",\n     \"created_at\": \"2012-02-22T02:04:58.147Z\",\n     \"modified_at\": \"2012-02-22T02:06:58.147Z\",\n     \"notes\": \"Description of the project\",\n     \"archived\": false,\n     \"workspace\": { id:3456789012 },\n     \"archived\": \"Team1\",\n     \"color\": \"green\",\n     \"team\": { id:4567890123 },\n     \"followers\":[ { id:5678901234 } ]\n   }]\n"
        }
      ]
    },
    "group": "definitions_js",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "lib/docs/definitions.js"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "field": "task",
            "optional": false,
            "description": "<p>Task information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "task.id",
            "optional": false,
            "description": "<p>Unique identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "task.name",
            "optional": false,
            "description": "<p>Title field.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "task.assignee",
            "optional": false,
            "description": "<p>Task assignee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "task.assignee.id",
            "optional": false,
            "description": "<p>Assignee identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "task.assignee_status",
            "optional": false,
            "description": "<p>Scheduling status of this task for the user it is assigned to. One of the following values: <code>inbox</code>, <code>later</code>, <code>today</code>, <code>upcoming</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "task.created_at",
            "optional": false,
            "description": "<p>Date created field.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "task.modified_at",
            "optional": false,
            "description": "<p>Last modified date field.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "task.due_on",
            "optional": false,
            "description": "<p>Due date field.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "task.completed_at",
            "optional": false,
            "description": "<p>Completed at date field.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "field": "task.completed",
            "optional": false,
            "description": "<p>If task is completed.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "task.workspace",
            "optional": false,
            "description": "<p>Which workspace this task is connected to.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "task.workspace.id",
            "optional": false,
            "description": "<p>Connected workspace identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "field": "task.followers",
            "optional": false,
            "description": "<p>List of followers.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "task.followers.id",
            "optional": false,
            "description": "<p>User identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "field": "task.hearted",
            "optional": false,
            "description": "<p>If task has a heart or not.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "field": "task.hearts",
            "optional": false,
            "description": "<p>Who has given a heart to this task.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "task.hearts.id",
            "optional": false,
            "description": "<p>User identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "task.hearts.name",
            "optional": false,
            "description": "<p>User name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "task.num_hearts",
            "optional": false,
            "description": "<p>Amount of hearts gotten.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "field": "task.projects",
            "optional": false,
            "description": "<p>Which projects are connected to this task.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "task.projects.id",
            "optional": false,
            "description": "<p>Project identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "task.projects.name",
            "optional": false,
            "description": "<p>Project title.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "field": "task.parent",
            "optional": false,
            "description": "<p>The parent-task of this task.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "task.parent.id",
            "optional": false,
            "description": "<p>Task identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "task.parent.name",
            "optional": false,
            "description": "<p>Task title.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": 2345678901,\n     \"name\": \"Task1\",\n     \"assignee\": { id:6789012345 },\n     \"assignee_status\": \"upcoming\",\n     \"created_at\": \"2012-02-22T02:04:58.147Z\",\n     \"modified_at\": \"2012-02-22T02:06:58.147Z\",\n     \"due_on\": \"2012-02-24\",\n     \"completed_at\": \"2012-02-22T02:08:58.147Z\",\n     \"completed\": false,\n     \"hearted\": false,\n     \"hearts\":[ { id:5678901234, name: 'John Doe' } ]\n     \"num_hearts\":1,\n     \"notes\": \"Description of the task\",\n     \"workspace\": { id:3456789012 },\n     \"archived\": \"Team1\",\n     \"followers\":[ { id:5678901234 } ],\n     \"projects\": { id:6789012345, name:'project1'},\n     \"parent\": { id:7890123456, name:'Task22'},\n   }\n"
        }
      ]
    },
    "group": "definitions_js",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "lib/docs/definitions.js"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "field": "story",
            "optional": false,
            "description": "<p>Story information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "story.id",
            "optional": false,
            "description": "<p>Unique identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "story.text",
            "optional": false,
            "description": "<p>Description field.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "story.created_at",
            "optional": false,
            "description": "<p>Date created field.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "story.created_by",
            "optional": false,
            "description": "<p>Creator.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "story.created_by.id",
            "optional": false,
            "description": "<p>User identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "field": "story.hearted",
            "optional": true,
            "description": "<p>If story has been hearted by me.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "field": "story.hearts",
            "optional": true,
            "description": "<p>List of users that hearted this story.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "story.hearts.id",
            "optional": true,
            "description": "<p>User identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "story.num_hearts",
            "optional": true,
            "description": "<p>Amount of hearts this story has gotten.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "story.target",
            "optional": false,
            "description": "<p>Task this story is connected to.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "story.target.id",
            "optional": false,
            "description": "<p>Task identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "story.source",
            "optional": false,
            "description": "<p>Triggered through <code>web</code>, <code>email</code>, <code>mobile</code>, <code>api</code> or <code>unknown</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "story.type",
            "optional": false,
            "description": "<p>Valid values are <code>comment</code> or <code>system</code>.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": 2345678901,\n     \"name\": \"Tag1\",\n     \"created_at\": \"2012-02-22T02:04:58.147Z\",\n     \"created_by\": { id:1234567890 },\n     \"text\": \"The story itself\",\n     \"hearted\": false,\n     \"hearts\": [ { id:4567890123 } ],\n     \"num_hearts\": 1,\n     \"target\": [ { id:4567890123 } ],\n     \"source\": \"web\",\n     \"type\": \"comment\"\n   }\n"
        }
      ]
    },
    "group": "definitions_js",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "lib/docs/definitions.js"
  }
] });