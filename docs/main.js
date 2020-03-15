/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/domEdit.js":
/*!************************!*\
  !*** ./src/domEdit.js ***!
  \************************/
/*! exports provided: createDiv, createElement, createGrouperDiv, createTaskDiv, appendElements, clearDomInputValues, setBlockOrNoneDisplay, calculateTotalHeightWithMargin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createDiv\", function() { return createDiv; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return createElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createGrouperDiv\", function() { return createGrouperDiv; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createTaskDiv\", function() { return createTaskDiv; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appendElements\", function() { return appendElements; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearDomInputValues\", function() { return clearDomInputValues; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setBlockOrNoneDisplay\", function() { return setBlockOrNoneDisplay; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calculateTotalHeightWithMargin\", function() { return calculateTotalHeightWithMargin; });\n\r\nfunction createDiv() {return document.createElement('div')}\r\nfunction createElement(tag, className, attribute) {\r\n    let element = document.createElement(tag);\r\n    if (className instanceof Array) {\r\n        for (let i=0; i<className.length; i++) {element.classList.add(className[i])}\r\n    } else {\r\n        element.classList.add(className);\r\n    }\r\n    if (attribute) {element.setAttribute(attribute[0], attribute[1])}\r\n    return element\r\n}\r\nfunction createElementAndSetText(tag, classList, text, attribute) {\r\n    let element = createElement(tag,classList, attribute);\r\n    element.textContent = text;\r\n    return element\r\n}\r\nfunction setInnerHtml(element, tag, textContent) {\r\n    element.innerHTML = `<${tag}>${textContent}</${tag}>`;\r\n}\r\nfunction appendElements(parent, sourceListArray) {\r\n    for (let i=0;i<sourceListArray.length;i++) {parent.appendChild(sourceListArray[i])}\r\n    return parent\r\n}\r\nfunction clearDomInputValues(inputArray) {\r\n    for (let i=0; i<inputArray.length;i++) {\r\n        inputArray[i].value = null;\r\n    }\r\n}\r\nfunction setBlockOrNoneDisplay(blockArray, noneArray) {\r\n    for (let i=0; i<blockArray.length; i++) {blockArray[i].style.display = 'block'}\r\n    for (let i=0; i<noneArray.length; i++) {noneArray[i].style.display = 'none'}\r\n}\r\nfunction calculateTotalHeight(elementArray) {\r\n    let totalHeight = 0;\r\n    for (let i=0;i<elementArray.length;i++) {totalHeight += elementArray[i].scrollHeight;}\r\n    return totalHeight;\r\n}\r\nfunction calculateTotalHeightWithMargin(elementArray, marginSize) {\r\n    let totalHeight = calculateTotalHeight(elementArray);\r\n    totalHeight += elementArray.length * marginSize;\r\n    return totalHeight;\r\n}\r\nfunction createGrouperDiv(title, addElement, addTaskFunction) { //with button at the top\r\n    let grouperDiv = createElement('div', 'grouper',['title',title]);\r\n    let titleContainer = createElement('div', 'grouperTitleContainer');\r\n    let grouperTitle = createElementAndSetText('h2','grouperTitle',title);\r\n    let expandButton = createElement('button', ['grouperExpandbtn']);\r\n    let addButton = createElementAndSetText('button','newbtn','+',['type', 'button']);\r\n    let allTasksContainer = createElement('div',['allTasksContainer','testFormExpand']);\r\n    addButton.addEventListener('click', addTaskFunction);\r\n    setInnerHtml(expandButton, 'h2', \"↕\");\r\n    appendElements(titleContainer,[grouperTitle,expandButton]);\r\n    appendElements(grouperDiv,[titleContainer, addButton, addElement, allTasksContainer]);\r\n    return grouperDiv\r\n}\r\nfunction createTaskDiv(title, description) {\r\n    let taskDiv = createElement('div', 'task',['title',title]);\r\n    let titleContainer = createElement('div', 'taskTitleContainer');\r\n    let taskTitle = createElementAndSetText('h4', 'taskTitle', title);\r\n    let expandButton = createElement('button', ['taskExpandbtn']);\r\n    setInnerHtml(expandButton, 'h4', \"↕\");\r\n    expandButton.firstElementChild.classList.add('noStrike');\r\n    let taskContent = createElement('div',['taskContent']);\r\n    setInnerHtml(taskContent,'p',description);\r\n    taskContent.classList.add('testFormExpand');\r\n    let modifyTaskButtonsContainer = createElement('div',['modifyTaskContainer','testFormExpand']);\r\n    let editTaskButton = createElementAndSetText('button',['modifyTask', 'editTask'],\r\n        'Edit',['type','button']);\r\n    let deleteTaskButton = createElementAndSetText('button',['modifyTask', 'deleteTask'],\r\n        'Delete',['type','button']);\r\n    let statusTaskButton = createElementAndSetText('button',['modifyTask', 'changeTaskStatus'],\r\n        'Done?',['type','button']);\r\n    appendElements(modifyTaskButtonsContainer,[editTaskButton,deleteTaskButton,statusTaskButton]);\r\n    appendElements(titleContainer,[taskTitle,expandButton]);\r\n    appendElements(taskDiv,[titleContainer,taskContent,modifyTaskButtonsContainer]);\r\n    return taskDiv\r\n}\r\n\n\n//# sourceURL=webpack:///./src/domEdit.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _domEdit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domEdit */ \"./src/domEdit.js\");\n/* harmony import */ var _taskEdit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskEdit */ \"./src/taskEdit.js\");\n\r\n\r\n\r\n\r\n(function toDoPage() {\r\n    let userArray = [];\r\n    const mainContentDiv = document.getElementById('mainContent');\r\n    const newGrouperButton = document.getElementById('newGrouperbtn');\r\n    const saveNewGrouperButton = document.querySelector('.newGrouperForm .savebtn');\r\n    const cancelNewGrouperButton = document.querySelector('.newGrouperForm .cancelbtn');\r\n    const newGrouperField = document.getElementById('newGrouperTitleField');\r\n    const newGrouperPopup = document.getElementById('newGrouperPopup');\r\n    const newTaskForm = document.querySelector('.newTaskPopup');\r\n\r\n    if (localStorage.length>0) {} else {userArray.push(_taskEdit__WEBPACK_IMPORTED_MODULE_1__[\"createDefaultGrouper\"]())}\r\n\r\n    for (let i=0; i<userArray.length; i++) {\r\n        let grouperDiv = createGrouperElement(userArray[i].title);\r\n        for (let a = 0; a < userArray[i].numOfTasks; a++) {\r\n            let taskDiv = _domEdit__WEBPACK_IMPORTED_MODULE_0__[\"createTaskDiv\"](userArray[i].tasks[a].title);\r\n            grouperDiv.appendChild(taskDiv);\r\n        }\r\n    }\r\n    function createGrouperElement(title) {\r\n        const newTaskFormClone = newTaskForm.cloneNode(true);\r\n        let taskFormButtons = newTaskFormClone.querySelectorAll('button');\r\n        taskFormButtons[0].addEventListener('click',closeTaskForm);\r\n        taskFormButtons[1].addEventListener('click',saveTask);\r\n        let element = _domEdit__WEBPACK_IMPORTED_MODULE_0__[\"createGrouperDiv\"](title,newTaskFormClone,openNewTaskForm);\r\n        element.querySelector('.grouperExpandbtn').addEventListener('click', function(e) {\r\n            toggleExpandGrouperTasks(element.querySelector('.allTasksContainer'));\r\n        });\r\n        mainContentDiv.appendChild(element);\r\n        return element;\r\n    }\r\n    function createTaskElement(taskTitle, taskDescription) {\r\n        let taskDiv = _domEdit__WEBPACK_IMPORTED_MODULE_0__[\"createTaskDiv\"](taskTitle, taskDescription);\r\n        taskDiv.querySelector('.taskExpandbtn').addEventListener('click', function(e) {\r\n            toggleExpandTaskContent(taskDiv.querySelector('.taskContent'));\r\n            toggleExpandTaskContent(taskDiv.querySelector('.modifyTaskContainer'))\r\n        });\r\n        taskDiv.querySelector('.editTask').addEventListener('click',openExistingTaskForm);\r\n        taskDiv.querySelector('.deleteTask').addEventListener('click',deleteExistingTask);\r\n        taskDiv.querySelector('.changeTaskStatus').addEventListener('click',toggleTaskStatus);\r\n        return taskDiv;\r\n    }\r\n    function renderNewTaskElement(grouperTasksContainer, newTaskDiv) {\r\n        grouperTasksContainer.appendChild(newTaskDiv);\r\n        expandGrouperTasks(grouperTasksContainer);\r\n        expandTaskContents(newTaskDiv.querySelector('.taskContent'));\r\n        expandTaskContents(newTaskDiv.querySelector('.modifyTaskContainer'));\r\n    }\r\n    function renderExistingTaskElement(oldTaskTitle, newTaskDiv) {\r\n        const oldTaskDiv = document.querySelector(`.task[title='${oldTaskTitle}'`);\r\n        oldTaskDiv.parentElement.replaceChild(newTaskDiv,oldTaskDiv);\r\n        expandTaskContents(newTaskDiv.querySelector('.taskContent'));\r\n        expandTaskContents(newTaskDiv.querySelector('.modifyTaskContainer'));\r\n    }\r\n    function getGrouperIndex(grouperElement) {\r\n        return userArray.findIndex(grouper=>grouper.title === grouperElement.title)\r\n    }\r\n    function getTaskIndex(grouperObject, taskTitle) {\r\n        return grouperObject.tasks.findIndex(\r\n            task=>task.title === taskTitle);\r\n    }\r\n    function saveNewGrouper() {\r\n        createGrouperElement(newGrouperField.value);\r\n        userArray.push(_taskEdit__WEBPACK_IMPORTED_MODULE_1__[\"createNewGrouper\"](newGrouperField.value));\r\n        closeGrouperForm();\r\n    }\r\n    function getGrouperAndFormElements(e) {\r\n        const grouperElement = e.target.parentElement.parentElement.parentElement.parentElement;\r\n        const grouperTaskForm = e.target.parentElement.parentElement;\r\n        return {grouperElement, form: grouperTaskForm}\r\n    }\r\n    function getItemsForModifyTask(e) {\r\n        const taskDiv = e.target.parentElement.parentElement;\r\n        const grouperDiv = taskDiv.parentElement.parentElement;\r\n        const grouperTaskForm = grouperDiv.querySelector('.newTaskPopup');\r\n        const grouperIndex = getGrouperIndex(grouperDiv);\r\n        const grouperObj = userArray[grouperIndex];\r\n        const taskIndex = getTaskIndex(grouperObj,taskDiv.title);\r\n        const taskObj = grouperObj.tasks[taskIndex];\r\n        return {taskDiv,grouperDiv,grouperTaskForm,grouperIndex,grouperObj,taskIndex,taskObj}\r\n    }\r\n    function taskCreationPlaceHolder(grouperElement, groupersTaskForm) { //grouperElement used for the form\r\n        const values = [];\r\n        values.push(groupersTaskForm.children[0].value);\r\n        if (groupersTaskForm.children[1]) {\r\n            values.push(groupersTaskForm.children[1].value.replace(/\\n\\r?/g, '<br />'));\r\n        }\r\n        values.push(groupersTaskForm.children[2].value);\r\n        const newTask = _taskEdit__WEBPACK_IMPORTED_MODULE_1__[\"createTaskObject\"](values[0],values[1],null,values[2],false);\r\n        const newTaskDiv = createTaskElement(newTask.title, newTask.description);\r\n        return {newTask, newTaskDiv};\r\n    }\r\n    function deleteExistingTask(e) {\r\n        if (window.confirm('Are you sure you want to delete this task?') !== true) {return}\r\n        const modifyItems = getItemsForModifyTask(e);\r\n        modifyItems.grouperObj.tasks.splice(modifyItems.taskIndex,1);\r\n        modifyItems.taskDiv.remove();\r\n    }\r\n    function toggleTaskStatus(e) {\r\n        const modifyItems = getItemsForModifyTask(e);\r\n        if (modifyItems.taskDiv.classList.contains('taskIsDone')) {\r\n            modifyItems.taskDiv.classList.remove('taskIsDone');\r\n            e.target.textContent = \"Done?\";\r\n            modifyItems.taskObj.status = false;\r\n        } else {\r\n            modifyItems.taskDiv.classList.add('taskIsDone');\r\n            e.target.textContent = \"Not Done?\"\r\n            modifyItems.taskObj.status = true;\r\n        }\r\n    }\r\n    function saveExistingTask(newGrouperItems, newTaskItems) {\r\n        const grouperIndex = getGrouperIndex(newGrouperItems.grouperElement);\r\n        userArray[grouperIndex].replaceExistingTask(userArray[grouperIndex].currentTaskEditingIndex,\r\n            newTaskItems.newTask);\r\n        renderExistingTaskElement(userArray[grouperIndex].currentTaskEditingTitle,newTaskItems.newTaskDiv);\r\n    }\r\n    function saveNewTask(newGrouperItems, newTaskItems) {\r\n        const grouperIndex = getGrouperIndex(newGrouperItems.grouperElement);\r\n        userArray[grouperIndex].addNewTask(newTaskItems.newTask);\r\n        renderNewTaskElement(newGrouperItems.grouperElement.querySelector('.allTasksContainer'),newTaskItems.newTaskDiv);\r\n    }\r\n    function saveTask(e) {\r\n        const newGrouperItems = getGrouperAndFormElements(e);\r\n        const newTaskItems = taskCreationPlaceHolder(newGrouperItems.grouperElement,newGrouperItems.form);\r\n        if (newGrouperItems.form.parentElement.classList.contains('editingExistingTask')) {\r\n            saveExistingTask(newGrouperItems,newTaskItems);\r\n        } else {\r\n            saveNewTask(newGrouperItems,newTaskItems);\r\n        }\r\n        closeTaskForm(e);\r\n    }\r\n    function openNewGrouperForm() {\r\n        _domEdit__WEBPACK_IMPORTED_MODULE_0__[\"setBlockOrNoneDisplay\"]([newGrouperPopup],[]);\r\n        const animateForm = setTimeout(function() {\r\n            testUnshrinkForm(newGrouperPopup);\r\n        },100);\r\n    }\r\n    function closeGrouperForm() {\r\n        testShrinkForm(newGrouperPopup);\r\n        _domEdit__WEBPACK_IMPORTED_MODULE_0__[\"clearDomInputValues\"]([newGrouperField]);\r\n        const removeForm = setTimeout(function() {\r\n            _domEdit__WEBPACK_IMPORTED_MODULE_0__[\"setBlockOrNoneDisplay\"]([newGrouperButton.parentElement],[newGrouperPopup])\r\n        },500)\r\n    }\r\n    function cancelNewGrouper() {closeGrouperForm()}\r\n    function bringUpTaskForm(taskForm) {\r\n        _domEdit__WEBPACK_IMPORTED_MODULE_0__[\"setBlockOrNoneDisplay\"]([taskForm],[]);\r\n        const inputElements = Array.from(taskForm.querySelectorAll('[class*=Input]'));\r\n        inputElements.forEach(input=>{input.style.opacity = '1'});\r\n        /*expandForm(taskForm);*/\r\n        const animateForm = setTimeout(function() {\r\n            testUnshrinkForm(taskForm)\r\n        },100);\r\n    }\r\n    function openNewTaskForm(e) {\r\n        bringUpTaskForm(e.target.nextElementSibling);\r\n    }\r\n    function openExistingTaskForm(e) {\r\n        const modifyItems = getItemsForModifyTask(e);\r\n        modifyItems.grouperTaskForm.classList.add('editingExistingTask');\r\n        modifyItems.grouperObj.addExistingItemsToEdit(modifyItems.taskIndex,modifyItems.taskDiv.title);\r\n        modifyItems.grouperTaskForm.querySelector('.taskTitleInput').value = modifyItems.taskObj.title;\r\n        modifyItems.grouperTaskForm.querySelector('.taskDescriptionInput').value =\r\n            modifyItems.taskObj.description.replace(/<br \\/>/g,'\\n');\r\n        modifyItems.grouperTaskForm.querySelector('.dueDateInput').value = modifyItems.taskObj.dueDate;\r\n        bringUpTaskForm(modifyItems.grouperTaskForm);\r\n    }\r\n    function closeTaskForm(e) {\r\n        let popup = e.target.parentElement.parentElement.parentElement;\r\n        popup.classList.remove('editingExistingTask');\r\n        testShrinkForm(popup);\r\n        let inputEle = Array.from(popup.querySelectorAll('[class*=Input]'));\r\n        _domEdit__WEBPACK_IMPORTED_MODULE_0__[\"clearDomInputValues\"](inputEle);\r\n        const removeForm = setTimeout(function() {\r\n            _domEdit__WEBPACK_IMPORTED_MODULE_0__[\"setBlockOrNoneDisplay\"]([],[popup])\r\n        },500)\r\n    }\r\n    function expandForm(element) {\r\n        element.style.maxHeight = 300 + element.scrollHeight + 'px';\r\n    }\r\n    function expandGrouperTasks(element) {\r\n        const heightMax = _domEdit__WEBPACK_IMPORTED_MODULE_0__[\"calculateTotalHeightWithMargin\"](\r\n            Array.from(element.querySelectorAll(\".task>*\")),40);\r\n        element.style.maxHeight = heightMax + 100 + 'px';\r\n    }\r\n    function expandTaskContents(element) {\r\n        element.style.maxHeight = element.scrollHeight +'px';\r\n    }\r\n    function shrink(element) {\r\n        element.style.maxHeight = null;\r\n    }\r\n    function testShrinkForm(element) {\r\n        element.style.transform = 'scale(0)';\r\n    }\r\n    function testUnshrinkForm(element) {\r\n        element.style.transform = 'scale(1)';\r\n    }\r\n    function toggleExpandGrouperTasks(element) {\r\n        if (element.style.maxHeight) {shrink(element)}\r\n        else {expandGrouperTasks(element)}\r\n    }\r\n    function toggleExpandTaskContent(element) {\r\n        if (element.style.maxHeight) {shrink(element)}\r\n        else {expandTaskContents(element)}\r\n    }\r\n    function enableButtons(buttonArray) {\r\n        for (let i=0;i<buttonArray.length;i++) {buttonArray[i].disabled = false}\r\n    }\r\n    function disableButtons(buttonArray) {\r\n        for (let i=0;i<buttonArray.length;i++) {buttonArray[i].disabled = true}\r\n    }\r\n    saveNewGrouperButton.addEventListener('click',saveNewGrouper);\r\n    newGrouperButton.addEventListener('click',openNewGrouperForm);\r\n    cancelNewGrouperButton.addEventListener('click',cancelNewGrouper);\r\n\r\n})();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/taskEdit.js":
/*!*************************!*\
  !*** ./src/taskEdit.js ***!
  \*************************/
/*! exports provided: createTaskObject, createDefaultGrouper, createNewGrouper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createTaskObject\", function() { return createTaskObject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createDefaultGrouper\", function() { return createDefaultGrouper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createNewGrouper\", function() { return createNewGrouper; });\n\r\nfunction createTaskObject(title,description,priority,dueDate,status) {\r\n    return {title, description, priority, dueDate, status}\r\n}\r\nfunction createGrouper(title, numOfTasks, tasks, id, currentTaskEditingIndex, currentTaskEditingTitle) {\r\n    return  {\r\n        title: title,\r\n        numOfTasks: numOfTasks,\r\n        tasks: tasks,\r\n        id: id,\r\n        currentTaskEditingIndex: currentTaskEditingIndex,\r\n        currentTaskEditingTitle: currentTaskEditingTitle,\r\n        addNewTask: function(taskObject) {\r\n            this.tasks.push(taskObject);\r\n            this.numOfTasks++;\r\n        },\r\n        replaceExistingTask: function(oldTaskIndex,newTaskObject) {\r\n            this.tasks.splice(oldTaskIndex, 1, newTaskObject);\r\n        },\r\n        addExistingItemsToEdit: function(taskIndex, taskTitle) {\r\n            this.currentTaskEditingIndex = taskIndex;\r\n            this.currentTaskEditingTitle = taskTitle;\r\n        }\r\n    };\r\n}\r\nfunction createDefaultGrouper() {\r\n    return createGrouper('Tasks',0,[],'defaultGrouper')\r\n}\r\nfunction createNewGrouper(title) {\r\n    return createGrouper(title,0,[],null)\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/taskEdit.js?");

/***/ })

/******/ });