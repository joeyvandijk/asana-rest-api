/**
 * @apiDefineSuccessStructure EmptySuccess
 * @apiSuccess {Object} object Empty object, so request succeeded.
 */

/**
 * @apiDefineSuccessStructure UserSuccess
 * @apiSuccess {Object} user User information.
 * @apiSuccess {Number} user.id User identifier.
 * @apiSuccess {String} user.name Title field.
 * @apiSuccess {String} user.email E-mail address.
 * @apiSuccess {Object} user.photo 5 urls (object properties) with profile photos.
 * @apiSuccess {Object[]} user.workspaces All workspaces this user is connected with.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": 1234567890,
 *       "name": "John Doe",
 *       "email": "john@doe.com",
 *       "photo": { image_21x21: 'https://s3.amazonaws.com/profile_photos/1234567890.7d86a9s7d6sa87d7a896da7878_21x21.png',
 *                  image_27x27: 'https://s3.amazonaws.com/profile_photos/1234567890.7d86a9s7d6sa87d7a896da7878_27x27.png',
 *                  image_36x36: 'https://s3.amazonaws.com/profile_photos/1234567890.7d86a9s7d6sa87d7a896da7878_36x36.png',
 *                  image_60x60: 'https://s3.amazonaws.com/profile_photos/1234567890.7d86a9s7d6sa87d7a896da7878_60x60.png',
 *                  image_128x128: 'https://s3.amazonaws.com/profile_photos/1234567890.7d86a9s7d6sa87d7a896da7878_128x128.png' },
 *       "workspaces" : [ { id: 234567891 }, { id: 345678941 }]
 *     }
 */

/**
 * @apiDefineSuccessStructure UsersSuccess
 * @apiSuccessTitle (response) Success response objects ~ Array/Event
 * @apiSuccess (response) {Object} user User information.
 * @apiSuccess (response) {Number} user.id User identifier.
 * @apiSuccess (response) {String} user.name Title field.
 * @apiSuccess (response) {String} user.email E-mail address.
 * @apiSuccess (response) {Object} user.photo 5 urls (object properties) with profile photos.
 * @apiSuccess (response) {Object[]} user.workspaces All workspaces this user is connected with.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [{
 *       "id": 1234567890,
 *       "name": "John Doe",
 *       "email": "john@doe.com",
 *       "photo": { image_21x21: 'https://s3.amazonaws.com/profile_photos/1234567890.7d86a9s7d6sa87d7a896da7878_21x21.png',
 *                  image_27x27: 'https://s3.amazonaws.com/profile_photos/1234567890.7d86a9s7d6sa87d7a896da7878_27x27.png',
 *                  image_36x36: 'https://s3.amazonaws.com/profile_photos/1234567890.7d86a9s7d6sa87d7a896da7878_36x36.png',
 *                  image_60x60: 'https://s3.amazonaws.com/profile_photos/1234567890.7d86a9s7d6sa87d7a896da7878_60x60.png',
 *                  image_128x128: 'https://s3.amazonaws.com/profile_photos/1234567890.7d86a9s7d6sa87d7a896da7878_128x128.png' },
 *       "workspaces" : [ { id: 234567891 }, { id: 345678941 }]
 *     }]
 */

/**
 * @apiDefineSuccessStructure AttachmentSuccess
 * @apiSuccess {Object} attachment Attachment information.
 * @apiSuccess {Number} attachment.id Unique identifier.
 * @apiSuccess {String} attachment.name Name of the file.
 * @apiSuccess {Date} attachment.created_at Date created field.
 * @apiSuccess {String} attachment.download_url The URL containing the content of the file. Due to processing don't persist this URL in your code, while it may change after it is processed.
 * @apiSuccess {String} attachment.host Which service is hosting the file: ```asana```, ```dropbox```, ```gdrive``` or ```box```.
 * @apiSuccess {Object} attachment.parent The parent task of the file.
 * @apiSuccess {Number} attachment.parent.id Task identifier.
 * @apiSuccess {String} attachment.view_url The URL where the file can be viewed. Browser optimized and not just a download URL.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": 2345678901,
 *       "name": "File1.png",
 *       "created_at": "2012-02-22T02:04:58.147Z",
 *       "download_url": "https://www.dropbox.com/s/123/File1.png?dl=1",
 *       "host": "dropbox",
 *       "parent": [ { id:4567890123 } ],
 *       "view_url": "https://www.dropbox.com/s/123/File1.png",
 *     }
 */

/**
 * @apiDefineSuccessStructure AttachmentsSuccess
 * @apiSuccessTitle (response) Success response objects ~ Array/Event
 * @apiSuccess (response) {Object} attachment Attachment information.
 * @apiSuccess (response) {Number} attachment.id Unique identifier.
 * @apiSuccess (response) {String} attachment.name Name of the file.
 * @apiSuccess (response) {Date} attachment.created_at Date created field.
 * @apiSuccess (response) {String} attachment.download_url The URL containing the content of the file. Due to processing don't persist this URL in your code, while it may change after it is processed.
 * @apiSuccess (response) {String} attachment.host Which service is hosting the file: ```asana```, ```dropbox```, ```gdrive``` or ```box```.
 * @apiSuccess (response) {Object} attachment.parent The parent task of the file.
 * @apiSuccess (response) {Number} attachment.parent.id Task identifier.
 * @apiSuccess (response) {String} attachment.view_url The URL where the file can be viewed. Browser optimized and not just a download URL.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [{
 *       "id": 2345678901,
 *       "name": "File1.png",
 *       "created_at": "2012-02-22T02:04:58.147Z",
 *       "download_url": "https://www.dropbox.com/s/123/File1.png?dl=1",
 *       "host": "dropbox",
 *       "parent": [ { id:4567890123 } ],
 *       "view_url": "https://www.dropbox.com/s/123/File1.png",
 *     }]
 */

/**
 * @apiDefineSuccessStructure StorySuccess
 * @apiSuccess {Object} story Story information.
 * @apiSuccess {Number} story.id Unique identifier.
 * @apiSuccess {String} story.text Description field.
 * @apiSuccess {Date} story.created_at Date created field.
 * @apiSuccess {Object} story.created_by Creator.
 * @apiSuccess {Number} story.created_by.id User identifier.
 * @apiSuccess {Boolean} [story.hearted] If story has been hearted by me.
 * @apiSuccess {Object[]} [story.hearts] List of users that hearted this story.
 * @apiSuccess {Number} [story.hearts.id] User identifier.
 * @apiSuccess {Number} [story.num_hearts] Amount of hearts this story has gotten.
 * @apiSuccess {Object} story.target Task this story is connected to.
 * @apiSuccess {Number} story.target.id Task identifier.
 * @apiSuccess {String} story.source Triggered through ```web```, ```email```, ```mobile```, ```api``` or ```unknown```.
 * @apiSuccess {String} story.type Valid values are ```comment``` or ```system```.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": 2345678901,
 *       "name": "Tag1",
 *       "created_at": "2012-02-22T02:04:58.147Z",
 *       "created_by": { id:1234567890 },
 *       "text": "The story itself",
 *       "hearted": false,
 *       "hearts": [ { id:4567890123 } ],
 *       "num_hearts": 1,
 *       "target": [ { id:4567890123 } ],
 *       "source": "web",
 *       "type": "comment"
 *     }
 */

/**
 * @apiDefineSuccessStructure StoriesSuccess
 * @apiSuccessTitle (response) Success response objects ~ Array/Event
 * @apiSuccess (response) {Object} story Story information.
 * @apiSuccess (response) {Number} story.id Unique identifier.
 * @apiSuccess (response) {String} story.text Description field.
 * @apiSuccess (response) {Date} story.created_at Date created field.
 * @apiSuccess (response) {Object} story.created_by Creator.
 * @apiSuccess (response) {Number} story.created_by.id User identifier.
 * @apiSuccess (response) {Boolean} [story.hearted] If story has been hearted by me.
 * @apiSuccess (response) {Object[]} [story.hearts] List of users that hearted this story.
 * @apiSuccess (response) {Number} [story.hearts.id] User identifier.
 * @apiSuccess (response) {Number} [story.num_hearts] Amount of hearts this story has gotten.
 * @apiSuccess (response) {Object} story.target Task this story is connected to.
 * @apiSuccess (response) {Number} story.target.id Task identifier.
 * @apiSuccess (response) {String} story.source Triggered through ```web```, ```email```, ```mobile```, ```api``` or ```unknown```.
 * @apiSuccess (response) {String} story.type Valid values are ```comment``` or ```system```.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [{
 *       "id": 2345678901,
 *       "name": "Tag1",
 *       "created_at": "2012-02-22T02:04:58.147Z",
 *       "created_by": { id:1234567890 },
 *       "text": "The story itself",
 *       "hearted": false,
 *       "hearts": [ { id:4567890123 } ],
 *       "num_hearts": 1,
 *       "target": [ { id:4567890123 } ],
 *       "source": "web",
 *       "type": "comment"
 *     }]
 */

/**
 * @apiDefineSuccessStructure TagSuccess
 * @apiSuccess {Object} tag Tag information.
 * @apiSuccess {Number} tag.id Unique identifier.
 * @apiSuccess {String} tag.name Title field.
 * @apiSuccess {Date} tag.created_at Date created field.
 * @apiSuccess {String} tag.notes Description field.
 * @apiSuccess {Object} tag.workspace Which workspace this tag is connected to.
 * @apiSuccess {Number} tag.workspace.id Connected workspace identifier.
 * @apiSuccess {String} tag.color Color that is shown in the GUI like *dark-pink, dark-green, dark-blue, dark-red, dark-teal, dark-brown, dark-orange, dark-purple, dark-warm-gray, light-pink, light-green, light-blue, light-red, light-teal, light-yellow, light-orange, light-purple, light-warm-gray*.
 * @apiSuccess {Object[]} tag.followers List of followers.
 * @apiSuccess {Object} tag.followers.id User identifier.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": 2345678901,
 *       "name": "Tag1",
 *       "created_at": "2012-02-22T02:04:58.147Z",
 *       "notes": "Description of the tag",
 *       "workspace": { id:3456789012 },
 *       "color": "green",
 *       "followers":[ { id:5678901234 } ]
 *     }
 */

/**
 * @apiDefineSuccessStructure TagsSuccess
 * @apiSuccessTitle (response) Success response objects ~ Array/Event
 * @apiSuccess (response) {Object} tag Tag information.
 * @apiSuccess (response) {Number} tag.id Unique identifier.
 * @apiSuccess (response) {String} tag.name Title field.
 * @apiSuccess (response) {Date} tag.created_at Date created field.
 * @apiSuccess (response) {String} tag.notes Description field.
 * @apiSuccess (response) {Object} tag.workspace Which workspace this tag is connected to.
 * @apiSuccess (response) {Number} tag.workspace.id Connected workspace identifier.
 * @apiSuccess (response) {String} tag.color Color that is shown in the GUI like *dark-pink, dark-green, dark-blue, dark-red, dark-teal, dark-brown, dark-orange, dark-purple, dark-warm-gray, light-pink, light-green, light-blue, light-red, light-teal, light-yellow, light-orange, light-purple, light-warm-gray*.
 * @apiSuccess (response) {Object[]} tag.followers List of followers.
 * @apiSuccess (response) {Object} tag.followers.id User identifier.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [{
 *       "id": 2345678901,
 *       "name": "Tag1",
 *       "created_at": "2012-02-22T02:04:58.147Z",
 *       "notes": "Description of the tag",
 *       "workspace": { id:3456789012 },
 *       "color": "green",
 *       "followers":[ { id:5678901234 } ]
 *     }]
 */

/**
 * @apiDefineSuccessStructure ProjectSuccess
 * @apiSuccess {Object} project Project information.
 * @apiSuccess {Number} project.id Unique identifier.
 * @apiSuccess {String} project.name Title field.
 * @apiSuccess {Date} project.created_at Date created field.
 * @apiSuccess {Date} project.modified_at Last modified date field.
 * @apiSuccess {String} project.notes Description field.
 * @apiSuccess {Boolean} project.archived If archived (not visible anymore).
 * @apiSuccess {Object} project.workspace Which workspace this project is connected to.
 * @apiSuccess {Number} project.workspace.id Connected workspace identifier.
 * @apiSuccess {Object} project.team Which team this project is connected to.
 * @apiSuccess {Number} project.team.id Connected team identifier.
 * @apiSuccess {String} project.color Color that is shown in the GUI like *dark-pink, dark-green, dark-blue, dark-red, dark-teal, dark-brown, dark-orange, dark-purple, dark-warm-gray, light-pink, light-green, light-blue, light-red, light-teal, light-yellow, light-orange, light-purple, light-warm-gray*.
 * @apiSuccess {Object[]} project.followers List of followers.
 * @apiSuccess {Object} project.followers.id User identifier.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": 2345678901,
 *       "name": "Project1",
 *       "created_at": "2012-02-22T02:04:58.147Z",
 *       "modified_at": "2012-02-22T02:06:58.147Z",
 *       "notes": "Description of the project",
 *       "archived": false,
 *       "workspace": { id:3456789012 },
 *       "archived": "Team1",
 *       "color": "green",
 *       "team": { id:4567890123 },
 *       "followers":[ { id:5678901234 } ]
 *     }
 */

/**
 * @apiDefineSuccessStructure ProjectsSuccess
 * @apiSuccessTitle (response) Success response objects ~ Array/Event
 * @apiSuccess (response) {Object} project Project information.
 * @apiSuccess (response) {Number} project.id Unique identifier.
 * @apiSuccess (response) {String} project.name Title field.
 * @apiSuccess (response) {Date} project.created_at Date created field.
 * @apiSuccess (response) {Date} project.modified_at Last modified date field.
 * @apiSuccess (response) {String} project.notes Description field.
 * @apiSuccess (response) {Boolean} project.archived If archived (not visible anymore).
 * @apiSuccess (response) {Object} project.workspace Which workspace this project is connected to.
 * @apiSuccess (response) {Number} project.workspace.id Connected workspace identifier.
 * @apiSuccess (response) {Object} project.team Which team this project is connected to.
 * @apiSuccess (response) {Number} project.team.id Connected team identifier.
 * @apiSuccess (response) {String} project.color Color that is shown in the GUI like *dark-pink, dark-green, dark-blue, dark-red, dark-teal, dark-brown, dark-orange, dark-purple, dark-warm-gray, light-pink, light-green, light-blue, light-red, light-teal, light-yellow, light-orange, light-purple, light-warm-gray*.
 * @apiSuccess (response) {Object[]} project.followers List of followers.
 * @apiSuccess (response) {Object} project.followers.id User identifier.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [{
 *       "id": 2345678901,
 *       "name": "Project1",
 *       "created_at": "2012-02-22T02:04:58.147Z",
 *       "modified_at": "2012-02-22T02:06:58.147Z",
 *       "notes": "Description of the project",
 *       "archived": false,
 *       "workspace": { id:3456789012 },
 *       "archived": "Team1",
 *       "color": "green",
 *       "team": { id:4567890123 },
 *       "followers":[ { id:5678901234 } ]
 *     }]
 */

/**
 * @apiDefineSuccessStructure TaskSuccess
 * @apiSuccess {Object} task Task information.
 * @apiSuccess {Number} task.id Unique identifier.
 * @apiSuccess {String} task.name Title field.
 * @apiSuccess {Object} task.assignee Task assignee.
 * @apiSuccess {String} task.assignee.id Assignee identifier.
 * @apiSuccess {String} task.assignee_status Scheduling status of this task for the user it is assigned to. One of the following values: ```inbox```, ```later```, ```today```, ```upcoming```.
 * @apiSuccess {Date} task.created_at Date created field.
 * @apiSuccess {Date} task.modified_at Last modified date field.
 * @apiSuccess {String} task.due_on Due date field.
 * @apiSuccess {Date} task.completed_at Completed at date field.
 * @apiSuccess {Boolean} task.completed If task is completed.
 * @apiSuccess {Object} task.workspace Which workspace this task is connected to.
 * @apiSuccess {Number} task.workspace.id Connected workspace identifier.
 * @apiSuccess {Object[]} task.followers List of followers.
 * @apiSuccess {Object} task.followers.id User identifier.
 * @apiSuccess {Boolean} task.hearted If task has a heart or not.
 * @apiSuccess {Object[]} task.hearts Who has given a heart to this task.
 * @apiSuccess {Number} task.hearts.id User identifier.
 * @apiSuccess {String} task.hearts.name User name.
 * @apiSuccess {Number} task.num_hearts Amount of hearts gotten.
 * @apiSuccess {Object[]} task.projects Which projects are connected to this task.
 * @apiSuccess {Number} task.projects.id Project identifier.
 * @apiSuccess {String} task.projects.name Project title.
 * @apiSuccess {Object[]} task.parent The parent-task of this task.
 * @apiSuccess {Number} task.parent.id Task identifier.
 * @apiSuccess {String} task.parent.name Task title.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": 2345678901,
 *       "name": "Task1",
 *       "assignee": { id:6789012345 },
 *       "assignee_status": "upcoming",
 *       "created_at": "2012-02-22T02:04:58.147Z",
 *       "modified_at": "2012-02-22T02:06:58.147Z",
 *       "due_on": "2012-02-24",
 *       "completed_at": "2012-02-22T02:08:58.147Z",
 *       "completed": false,
 *       "hearted": false,
 *       "hearts":[ { id:5678901234, name: 'John Doe' } ]
 *       "num_hearts":1,
 *       "notes": "Description of the task",
 *       "workspace": { id:3456789012 },
 *       "archived": "Team1",
 *       "followers":[ { id:5678901234 } ],
 *       "projects": { id:6789012345, name:'project1'},
 *       "parent": { id:7890123456, name:'Task22'},
 *     }
 */

/**
 * @apiDefineSuccessStructure TasksSuccess
 * @apiSuccessTitle (response) Success response objects ~ Array/Event
 * @apiSuccess (response) {Object} task Task information.
 * @apiSuccess (response) {Number} task.id Unique identifier.
 * @apiSuccess (response) {String} task.name Title field.
 * @apiSuccess (response) {Object} task.assignee Task assignee.
 * @apiSuccess (response) {String} task.assignee.id Assignee identifier.
 * @apiSuccess (response) {String} task.assignee_status Scheduling status of this task for the user it is assigned to. One of the following values: ```inbox```, ```later```, ```today```, ```upcoming```.
 * @apiSuccess (response) {Date} task.created_at Date created field.
 * @apiSuccess (response) {Date} task.modified_at Last modified date field.
 * @apiSuccess (response) {String} task.due_on Due date field.
 * @apiSuccess (response) {Date} task.completed_at Completed at date field.
 * @apiSuccess (response) {Boolean} task.completed If task is completed.
 * @apiSuccess (response) {Object} task.workspace Which workspace this task is connected to.
 * @apiSuccess (response) {Number} task.workspace.id Connected workspace identifier.
 * @apiSuccess (response) {Object[]} task.followers List of followers.
 * @apiSuccess (response) {Object} task.followers.id User identifier.
 * @apiSuccess (response) {Boolean} task.hearted If task has a heart or not.
 * @apiSuccess (response) {Object[]} task.hearts Who has given a heart to this task.
 * @apiSuccess (response) {Number} task.hearts.id User identifier.
 * @apiSuccess (response) {String} task.hearts.name User name.
 * @apiSuccess (response) {Number} task.num_hearts Amount of hearts gotten.
 * @apiSuccess (response) {Object[]} task.projects Which projects are connected to this task.
 * @apiSuccess (response) {Number} task.projects.id Project identifier.
 * @apiSuccess (response) {String} task.projects.name Project title.
 * @apiSuccess (response) {Object[]} task.parent The parent-task of this task.
 * @apiSuccess (response) {Number} task.parent.id Task identifier.
 * @apiSuccess (response) {String} task.parent.name Task title.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [{
 *       "id": 2345678901,
 *       "name": "Task1",
 *       "assignee": { id:6789012345 },
 *       "assignee_status": "upcoming",
 *       "created_at": "2012-02-22T02:04:58.147Z",
 *       "modified_at": "2012-02-22T02:06:58.147Z",
 *       "due_on": "2012-02-24",
 *       "completed_at": "2012-02-22T02:08:58.147Z",
 *       "completed": false,
 *       "hearted": false,
 *       "hearts":[ { id:5678901234, name: 'John Doe' } ]
 *       "num_hearts":1,
 *       "notes": "Description of the task",
 *       "workspace": { id:3456789012 },
 *       "archived": "Team1",
 *       "followers":[ { id:5678901234 } ],
 *       "projects": { id:6789012345, name:'project1'},
 *       "parent": { id:7890123456, name:'Task22'},
 *     }]
 */