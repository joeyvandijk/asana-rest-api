This npm module is ment to use the Asana REST API in a structured manner within Node.JS. All functionality is available.


# Installation

1. Get an [API key](https://app.asana.com/-/account_api).
2. Install the module ```npm install asana-rest-api```
3. Start with the following (streaming) example

```javascript
var asana = require('asana-rest-api');
var api = new asana('key-you-have-downloaded');
api.workspaces.list().on('readable',function(){
    console.log('A workspace:',this.read());
}).on('end',function(){
    console.log('All workspaces received.');
}).on('error',function(err){
    console.log('An API error: ',err);
});
```


# Feedback

With constructive and positive feedback I will be able to further enhance this wrapper API, but please follow the following steps to ensure the smoothest workflow for all parties involved.

1. Check the [Github](https://github.com/joeyvandijk/asana-rest-api) issues list
2. Explain your problem and if possible show it in an example
3. Download / fork the repo and investigate the code
4. Create a pull request


# Test

While it is an API to test and it is not ment to make a mess of your current Asana workspace, it is advised to follow these steps to test this module:

1. ```npm install``` to ensure you have all the modules to run the test-package.
2. Create a *workspace* in Asana (in its desktop-client).
3. Run ```api.workspaces.list()``` and copy the ```id``` of the new workspace
4. Paste this ```id``` into ```config.json > 'workspace'-property```
5. Paste your Asana key into ```config.json > 'key'-property```
6. Run ```npm test```
7. Delete the created *workspace* in the desktop app, because this is not possible through the API.


# Remarks

### WARNINGS

Before using this module be advised about using the Asana API:

1. You **cannot** create or delete workspaces.
2. You **cannot** delete tags.
3. Copied completed tasks will have a **new** completed date.
4. You **cannot** create, update or delete a team.
5. You **cannot** delete attachments.

These are limitations that are caused by the API, not this module. You will have to do some manual tasks to circumvent these issues.

Some other warnings that are imported to follow:

* *Specify only those fields you wish to change, or else you may overwrite changes made by another user since you last retrieved the task.*

## Function options

This module is set up to use semantics during the definition of a call. The following options are available:

* streaming:
 * ```(id,options).on();``` for single object response calls (```.id()```/```.me()```/```.remove()```)
 * ```(options).on();``` for lists or/with specific filters/body (```.list()```/```.create()```/```.update()```)
 * ```().on();``` for lists
* callbacks:
 * ```(id,options,callback-function);``` for single object response calls (```.id()```/```.me()```/```.remove()```)
 * ```(options,callback-function);``` for lists or/with specific filters/body (```.list()```/```.create()```/```.update()```)
 * ```(callback-function);``` for lists

During the use of this module you will discover that you can filter properties with your API request by using the following properties on the options-object described above:

* ```fields``` : which fields of the object to return like ```(0123456789,{fields:['name']})```
* ```body``` : add information to use at creation or updating an object like ```(0123456789,{body:{id:0123456789,name:'John Doe'}})```

This example will override the default return fields of ```workspaces.list``` (skip ```is_organization```) :

```javascript
...
api.workspaces.list({fields:['name']}).on('readable',function(){
    console.log('A workspace:',this.read());
}).on('end',function(){
    console.log('All workspaces received.');
}).on('error',function(err){
    console.log('An API error: ',err);
});
```

Use the example code and property information at all endpoints for more information. All examples will describe the optional properties, but will keep the example itself as simple as possible, so you can start quickly and later extend that code with additional filters, etc.

## Streams &amp; callbacks
You can use this module with a callback or a [streams2](https://github.com/substack/stream-handbook) approach. Check the examples how to implement them.

**Be advised** that throughout only the objects of the response are documented. For *streams* that are data-events and for callbacks it is an Array or the Object itself, so:

```javascript
...
api.workspaces.list().on('readable',function(){
    console.log('A workspace:',this.read());
}).on('end',function(){
    console.log('All workspaces received.');
}).on('error',function(err){
    console.log('An API error: ',err);
});
```

will result in for example:

```
(readable-event) A workspace: {id: 0123456789, name: 'Test1'}
(readable-event) A workspace: {id: 0123456781, name: 'Test2'}
(readable-event) A workspace: {id: 0123456782, name: 'Test3'}
(end-event) All workspaces received
```

that will resemble the *callback approach* as:

```
(callback) [{id: 0123456789, name: 'Test1'},{id: 0123456781, name: 'Test2'},{id: 0123456782, name: 'Test3'}]
```

This is done to keep the documentation clear by showing the semantics of an entity that can come as per object (*streaming*) or a list of objects (*callback*).

For more information about the Asana API, please visit their [documentation site](http://developer.asana.com/documentation).