(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-project/add-project.component.css":
/*!*******************************************************!*\
  !*** ./src/app/add-project/add-project.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row-centered {\r\n    text-align: center;\r\n}\r\n\r\n.row-right {\r\n    text-align: right;\r\n    padding-right: 2%;\r\n}\r\n\r\n.checkbox-padding {\r\n    padding-left: 5px;\r\n}\r\n\r\n.middleVert {\r\n    padding-top: 7%;\r\n}\r\n\r\n.middleVert1 {\r\n    height: 20px;\r\n}\r\n\r\n.text-danger {\r\n    color: red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXByb2plY3QvYWRkLXByb2plY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUNBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2FkZC1wcm9qZWN0L2FkZC1wcm9qZWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93LWNlbnRlcmVkIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnJvdy1yaWdodCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIlO1xyXG59XHJcblxyXG4uY2hlY2tib3gtcGFkZGluZyB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLm1pZGRsZVZlcnQge1xyXG4gICAgcGFkZGluZy10b3A6IDclO1xyXG59XHJcbi5taWRkbGVWZXJ0MSB7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi50ZXh0LWRhbmdlciB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/add-project/add-project.component.html":
/*!********************************************************!*\
  !*** ./src/app/add-project/add-project.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-growl [(value)]=\"msgs\" [life]=\"3000\" [sticky]=\"false\"></p-growl>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n                <h3 class=\"panel-title\">Add Project</h3>\n            </div>\n            <div class=\"panel-body\">\n                <form [formGroup]=\"addProjectForm\" (ngSubmit)=\"addProjectSubmit()\" novalidate>\n                    <div class=\"row\">\n                        <div class=\"col-md-3\"></div>\n                        <div class=\"form-group col-md-6\">\n                            <label class=\"control-label col-sm-4\" for=\"firstName\">Project:</label>\n                            <div class=\"col-sm-8\">\n                                <input class=\"form-control\" id=\"projectName\" placeholder=\"Enter project name\" name=\"projectNameControl\" formControlName=\"projectNameControl\">\n                            </div>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <div *ngIf=\"(addProjectForm.controls.projectNameControl.touched && !addProjectForm.controls.projectNameControl.valid)\">\n                                <span class=\"glyphicon glyphicon-info-sign text-danger\" aria-hidden=\"true\" style=\"display:inline;\"></span>\n                                <p class=\"text-danger\" style=\"display:inline;\">This is a required field</p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-5\"></div>\n                        <div class=\"col-md-6\">\n                            <div class=\"checkbox checkbox-padding\">\n                                <label>\n                                    <input type=\"checkbox\" value=\"\" name=\"checkDatesControl\" formControlName=\"checkDatesControl\">Set Start and End Date\n                                </label>\n                            </div>\n                        </div>\n                        <div class=\"col-md-1\"></div>\n                    </div>\n                    <div class=\"row\" *ngIf=\"addProjectForm.controls.checkDatesControl.value\">\n                        <div class=\"col-md-3\">{{startDate}}</div>\n                        <div class=\"form-group col-md-6\">\n                            <label class=\"control-label col-sm-4\" for=\"startDate\">Start Date:</label>\n                            <div class=\"col-md-8\">\n                                <div class=\"input-group\">\n                                        <p-calendar  name=\"startDateControl\"   formControlName=\"startDateControl\" [showIcon]=\"true\" dateFormat=\"yy-mm-dd\"></p-calendar>\n                                    \n                                </div>                   \n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\" *ngIf=\"addProjectForm.controls.checkDatesControl.value\">\n                        <div class=\"col-md-3\"></div>\n                        <div class=\"form-group col-md-6\">\n                            <label class=\"control-label col-sm-4\" for=\"endDate\">End Date:</label>\n                            <div class=\"col-md-8\">                  \n                                <div class=\"input-group\">\n                                        <p-calendar  name=\"endDateControl\"  formControlName=\"endDateControl\"   [showIcon]=\"true\" dateFormat=\"yy-mm-dd\"></p-calendar>\n\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-3\">\n                           \n                            \n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-3\"></div>\n                        <div class=\"form-group col-md-6\">\n                            <label class=\"control-label col-sm-4\">priority:</label>\n                            <div class=\"col-sm-8\">\n                                <div class=\"row\">\n                                    <div class=\"col-sm-1\">\n                                        <h4 class=\"middleVert1\">0</h4>\n                                    </div>\n                                    <div class=\"col-sm-7\">\n                                        <div class=\"middleVert\"></div>\n                                        <p-slider formControlName=\"priorityControl\" [min]=\"0\" [max]=\"30\" [step]=\"1\" [style]=\"{'width':'200px'}\"></p-slider>\n                                    </div>\n                                    <div class=\"col-sm-1\">\n                                        <h4 class=\"middleVert1\">30</h4>\n                                    </div>\n                                    <div class=\"col-sm-3\">\n                                        <input class=\"form-control\" readonly name=\"priorityDisplayControl\" formControlName=\"priorityDisplayControl\" value=\"{{addProjectForm.controls.priorityControl.value}}\">\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-3\">\n                                <div *ngIf=\"(addProjectForm.controls.priorityControl.touched && !addProjectForm.controls.priorityControl.valid)\">\n                                    <span class=\"glyphicon glyphicon-info-sign text-danger\" aria-hidden=\"true\" style=\"display:inline;\"></span>\n                                    <p class=\"text-danger\" style=\"display:inline;\">This is a required field</p>\n                                </div>\n                            </div>                        \n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-3\"></div>\n                        <div class=\"form-group col-md-6\">\n                            <label class=\"control-label col-sm-4\" >Manager:</label>\n                            <div class=\"col-sm-6\">\n                                <input class=\"form-control\" placeholder=\"Select the Manager\" readonly  name=\"selectedManager\" formControlName=\"selectedManagerName\">\n                            </div>\n                            <div class=\"col-sm-2\">\n                                <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#searchManagersModal\">Search</button>\n                            </div>\n                        </div>\n                        <div class=\"col-md-3\"></div> \n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-3\"></div>\n                        <div class=\"form-group col-md-6\">\n                            <div class=\"col-md-4\"></div>\n                            <div class=\"col-md-8\">\n                                <button type=\"submit\" class=\"btn btn-md\" [disabled]=\"addProjectForm.invalid\"\n                                [ngClass]=\"{\n                                    'btn-primary': addOrUpdateBtn == 'Add',\n                                    'btn-success': addOrUpdateBtn == 'Update'\n                                }\">{{addOrUpdateBtn}}</button>\n                                <button type=\"button\" class=\"btn btn-md btn-danger\" (click)=\"addProjectReset()\">Reset</button>\n                            </div>\n                        </div>\n                        <div class=\"col-md-3\"></div>\n                    </div>\n                </form>                              \n            </div>\n        </div>\n\n    </div>\n    <div class=\"row\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n                <h3 class=\"panel-title\">View Projects</h3>\n            </div>\n            <div class=\"panel-body\">\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <p-dataTable [value]=\"projectsList\">\n                            <p-column field=\"projectId\" header=\"Project ID\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>\n                            <p-column field=\"projectName\" header=\"Project Name\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>\n                            <p-column field=\"startDate\" header=\"Start Date\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\">\n\n                                <ng-template let-col let-project=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\n                                    <span>{{project[col.field]|date:'dd/MM/yyyy'}}</span>\n                                </ng-template>\n                            </p-column>\n                            <p-column field=\"endDate\" header=\"End Date\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\">\n                                <ng-template let-col let-project=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\n                                    <span>{{project[col.field]|date:'dd/MM/yyyy'}}</span>\n                                </ng-template>\n                            </p-column>\n                            <p-column field=\"priority\" header=\"priority\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>\n                            <p-column field=\"managerName\" header=\"Manager Name\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>                            \n                            <p-column>\n                                <ng-template let-project=\"rowData\" pTemplate=\"body\">\n                                    <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"updateProject(project)\">Update</button>\n                                    <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"suspendProject(project)\">Suspend</button>\n                                </ng-template>\n                            </p-column>\n                        </p-dataTable>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n    <!-- Modal - Search Managers -->\n    <div id=\"searchManagersModal\" class=\"modal fade\" role=\"dialog\">\n        <div class=\"modal-dialog modal-lg\">\n            <!-- Modal content-->\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                    <h4 class=\"modal-title\">Search Managers</h4>\n                </div>\n                <div class=\"modal-body\">\n                    <div class=\"row\">\n                        <div class=\"col-md-1\"></div>\n                        <div class=\"col-md-10\">\n                            <p-dataTable [value]=\"usersList\">\n                                <p-column field=\"userId\" header=\"User ID\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>\n                                <p-column field=\"firstName\" header=\"First Name\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>\n                                <p-column field=\"lastName\" header=\"Last Name\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>\n                                <p-column field=\"employeeId\" header=\"Employee ID\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>\n                                <p-column>\n                                    <ng-template let-user=\"rowData\" pTemplate=\"body\">\n                                        <button type=\"button\" class=\"btn btn-success btn-sm\" id=\"assignManager\" (click)=\"assignManager(user.userId, user.firstName + ' ' + user.lastName)\"\n                                            data-dismiss=\"modal\">Assign</button>\n                                    </ng-template>\n                                </p-column>\n                            </p-dataTable>\n                        </div>\n                        <div class=\"col-md-1\"></div>\n                    </div>\n                    <br>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    \n    <p-confirmDialog header=\"Confirmation\" icon=\"fa fa-question-circle\" width=\"425\" #cd ></p-confirmDialog>"

/***/ }),

/***/ "./src/app/add-project/add-project.component.ts":
/*!******************************************************!*\
  !*** ./src/app/add-project/add-project.component.ts ***!
  \******************************************************/
/*! exports provided: AddProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProjectComponent", function() { return AddProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _add_project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-project.service */ "./src/app/add-project/add-project.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






var AddProjectComponent = /** @class */ (function () {
    function AddProjectComponent(formBuilder, service, confirmationService, datePipe) {
        this.formBuilder = formBuilder;
        this.service = service;
        this.confirmationService = confirmationService;
        this.datePipe = datePipe;
        this.msgs = [];
        this.addOrUpdateBtn = 'Add';
    }
    AddProjectComponent.prototype.ngOnInit = function () {
        this.formInit();
        this.getUsers();
        this.getAllProject();
    };
    AddProjectComponent.prototype.formInit = function () {
        this.addProjectForm = this.formBuilder.group({
            projectId: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            projectNameControl: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            checkDatesControl: [null],
            startDateControl: [this.datePipe.transform(Date.now(), 'yyyy-MM-dd').toString()],
            endDateControl: [this.datePipe.transform(Date.now() + 86400000, 'yyyy-MM-dd').toString()],
            status: ['Active'],
            priorityControl: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            selectedManagerControl: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            selectedManagerName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            priorityDisplayControl: [null]
        });
    };
    AddProjectComponent.prototype.getUsers = function () {
        var _this = this;
        this.usersList = [];
        this.service.getUsers()
            .subscribe(function (data) { _this.usersList = data; });
    };
    AddProjectComponent.prototype.getAllProject = function () {
        var _this = this;
        this.projectsList = [];
        this.service.getAllProject()
            .subscribe(function (data) { _this.projectsList = data; });
    };
    AddProjectComponent.prototype.updateProject = function (project) {
        this.addOrUpdateBtn = 'Update';
        this.addProjectForm = this.formBuilder.group({
            projectId: [project.projectId, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            projectNameControl: [project.projectName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            checkDatesControl: [project.endDate === null && project.startDate === null ? false : true],
            startDateControl: [this.datePipe.transform(project.startDate, 'yyyy-MM-dd').toString()],
            endDateControl: [this.datePipe.transform(project.endDate, 'yyyy-MM-dd').toString()],
            status: [project.status],
            priorityControl: [project.priority, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            selectedManagerControl: [project.managerId, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            selectedManagerName: [project.managerName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            priorityDisplayControl: [null]
        });
    };
    AddProjectComponent.prototype.showMessage = function (status, message) {
        this.msgs = [];
        if (status === true) {
            this.msgs.push({ severity: 'success', summary: 'Success', detail: message });
        }
        else {
            this.msgs.push({ severity: 'error', summary: 'Error', detail: message });
        }
        this.addProjectReset();
    };
    AddProjectComponent.prototype.addProjectReset = function () {
        this.addProjectForm.reset();
        this.formInit();
        this.addOrUpdateBtn = 'Add';
    };
    AddProjectComponent.prototype.addProjectSubmit = function () {
        var _this = this;
        this.service.updateProject({
            projectId: this.addProjectForm.get('projectId').value,
            endDate: this.addProjectForm.get('endDateControl').value,
            startDate: this.addProjectForm.get('startDateControl').value,
            managerId: this.addProjectForm.get('selectedManagerControl').value,
            priority: this.addProjectForm.get('priorityControl').value,
            projectName: this.addProjectForm.get('projectNameControl').value,
            status: this.addProjectForm.get('status').value
        })
            .subscribe(function (data) { _this.showMessage(data.status.result, data.status.message); });
    };
    AddProjectComponent.prototype.assignManager = function (userId, mgrName) {
        this.addProjectForm.patchValue({
            selectedManagerControl: userId,
            selectedManagerName: mgrName
        });
    };
    AddProjectComponent.prototype.suspendProject = function (project) {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Are you sure that you want to suspend project : ' + project.projectName + '?',
            accept: function () {
                project.status = 'Suspended';
                _this.service.updateProject(project)
                    .subscribe(function (data) { _this.showMessage(data.status.result, data.status.message); });
            }
        });
    };
    AddProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./add-project.component.html */ "./src/app/add-project/add-project.component.html"),
            providers: [_add_project_service__WEBPACK_IMPORTED_MODULE_3__["AddProjectService"], primeng_api__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
            styles: [__webpack_require__(/*! ./add-project.component.css */ "./src/app/add-project/add-project.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _add_project_service__WEBPACK_IMPORTED_MODULE_3__["AddProjectService"], primeng_api__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]])
    ], AddProjectComponent);
    return AddProjectComponent;
}());



/***/ }),

/***/ "./src/app/add-project/add-project.service.ts":
/*!****************************************************!*\
  !*** ./src/app/add-project/add-project.service.ts ***!
  \****************************************************/
/*! exports provided: AddProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProjectService", function() { return AddProjectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var AddProjectService = /** @class */ (function () {
    function AddProjectService(http) {
        this.http = http;
    }
    AddProjectService.prototype.getUsers = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/user/getAllUsers');
    };
    AddProjectService.prototype.getAllProject = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/project/getAllProjects');
    };
    AddProjectService.prototype.updateProject = function (proj) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/project/updateProject', proj);
    };
    AddProjectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AddProjectService);
    return AddProjectService;
}());



/***/ }),

/***/ "./src/app/add-task/add-task.component.css":
/*!*************************************************!*\
  !*** ./src/app/add-task/add-task.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row-centered {\r\n    text-align: center;\r\n}\r\n\r\n.row-right {\r\n    text-align: right;\r\n    padding-right: 2%;\r\n}\r\n\r\n.checkbox-padding {\r\n    padding-left: 5px;\r\n}\r\n\r\n.middleVert {\r\n    padding-top: 7%;\r\n}\r\n\r\n.middleVert1 {\r\n    height: 20px;\r\n}\r\n\r\n.text-danger {\r\n    color: red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXRhc2svYWRkLXRhc2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUNBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2FkZC10YXNrL2FkZC10YXNrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93LWNlbnRlcmVkIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnJvdy1yaWdodCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIlO1xyXG59XHJcblxyXG4uY2hlY2tib3gtcGFkZGluZyB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLm1pZGRsZVZlcnQge1xyXG4gICAgcGFkZGluZy10b3A6IDclO1xyXG59XHJcbi5taWRkbGVWZXJ0MSB7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi50ZXh0LWRhbmdlciB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/add-task/add-task.component.html":
/*!**************************************************!*\
  !*** ./src/app/add-task/add-task.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-growl [(value)]=\"msgs\" [life]=\"3000\" [sticky]=\"false\"></p-growl>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n                <h3 class=\"panel-title\">{{formMode}}</h3>\n            </div>\n            <div class=\"panel-body\">\n                <form [formGroup]=\"addTaskForm\" (ngSubmit)=\"addTaskSubmit()\" novalidate>\n                <div class=\"row\">\n                    <div class=\"col-md-3\"></div>\n                    <div class=\"form-group col-md-6\">\n                        <label class=\"control-label col-sm-4\" for=\"empId\">Project:</label>\n                        <div class=\"col-sm-6\">\n                            <input class=\"form-control\" id=\"project\" placeholder=\"Select the Project\" readonly value=\"{{selectedProject}}\" formControlName=\"ProjectIdControl\">\n                        </div>\n                        <div class=\"col-sm-2\">\n                            <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" [disabled]=\"formMode === 'Edit Task'\" data-target=\"#searchProjectsModal\">Search</button>\n                        </div>\n                    </div>\n                    <div class=\"col-md-3\"></div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-3\"></div>\n                    <div class=\"form-group col-md-6\">\n                        <label class=\"control-label col-sm-4\" for=\"task\">Task:</label>\n                        <div class=\"col-sm-8\">\n                            <input class=\"form-control\" id=\"task\" placeholder=\"Enter task name\" formControlName=\"taskNameControl\">\n                        </div>\n                    </div>\n                    <div class=\"col-md-3\"></div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-5\"></div>\n                    <div class=\"col-md-6\">\n                        <div class=\"checkbox checkbox-padding\">\n                            <label>\n                                <input type=\"checkbox\" value=\"\" name=\"IsParentTaskControl\" (change)=\"handleChange($event)\" formControlName=\"IsParentTaskControl\">Parent Task</label>\n                        </div>\n                    </div>\n                    <div class=\"col-md-1\"></div>\n                </div>\n           \n\n                <div class=\"row\" *ngIf=\"addTaskForm.controls.IsParentTaskControl.value !== true\">\n                    <div class=\"col-md-3\"></div>\n                    <div class=\"form-group col-md-6\">\n                        <label class=\"control-label col-sm-4\">priority:</label>\n                        <div class=\"col-sm-8\">\n                            <div class=\"row\">\n                                <div class=\"col-sm-1\">\n                                    <h4 class=\"middleVert1\">0</h4>\n                                </div>\n                                <div class=\"col-sm-7\">\n                                    <div class=\"middleVert\"></div>\n                                    <p-slider formControlName=\"priorityControl\" [min]=\"0\" [max]=\"30\" [step]=\"1\" [style]=\"{'width':'200px'}\"></p-slider>\n                                </div>\n                                <div class=\"col-sm-1\">\n                                    <h4 class=\"middleVert1\">30</h4>\n                                </div>\n                                <div class=\"col-sm-3\">\n                                    <input class=\"form-control\" readonly formControlName=\"priorityDisplayControl\"  value=\"{{addTaskForm.controls.priorityControl.value}}\">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-3\">\n                        <!-- <div *ngIf=\"(addProjectForm.controls.priorityControl.touched && !addProjectForm.controls.priorityControl.valid)\">\n                            <span class=\"glyphicon glyphicon-info-sign text-danger\" aria-hidden=\"true\" style=\"display:inline;\"></span>\n                            <p class=\"text-danger\" style=\"display:inline;\">This is a required field</p>\n                        </div> -->\n                    </div>\n                </div>\n                <div class=\"row\"  *ngIf=\"addTaskForm.controls.IsParentTaskControl.value !== true\">\n                    <div class=\"col-md-3\"></div>\n                    <div class=\"form-group col-md-6\">\n                        <label class=\"control-label col-sm-4\" for=\"pTask\">Parent Task:</label>\n                        <div class=\"col-sm-6\">\n                            <input class=\"form-control\" id=\"pTask\" placeholder=\"Select the Parent Task\" readonly  value=\"{{selectedTask}}\" formControlName=\"ParentTaskControl\">\n                        </div>\n                        <div class=\"col-sm-2\">\n                            <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#searchPTasksModal\">Search</button>\n                        </div>\n                    </div>\n                    <div class=\"col-md-3\"></div>\n                </div>\n                <div class=\"row\" *ngIf=\"addTaskForm.controls.IsParentTaskControl.value !== true\">\n                    <div class=\"col-md-3\"></div>\n                    <div class=\"form-group col-md-6\">\n                        <label class=\"control-label col-sm-4\" for=\"startDate\">Start Date:</label>\n                        <div class=\"col-md-8\">\n                            <div class=\"input-group\">\n                                    <p-calendar  name=\"StartDateControl\" formControlName=\"StartDateControl\"   [showIcon]=\"true\"></p-calendar>\n\n                           \n                            </div>\n                        </div>\n                    </div>\n                </div>\n                \n                <div class=\"row\" *ngIf=\"addTaskForm.controls.IsParentTaskControl.value !== true\">\n                    <div class=\"col-md-3\"></div>\n                    <div class=\"form-group col-md-6\">\n                        <label class=\"control-label col-sm-4\" for=\"endDate\">End Date:</label>\n                        <div class=\"col-md-8\">\n                            <div class=\"input-group\">\n                                    <p-calendar  name=\"EndDateControl\" formControlName=\"EndDateControl\"   [showIcon]=\"true\"></p-calendar>\n\n                                \n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-3\"></div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-3\"></div>\n                    <div class=\"form-group col-md-6\">\n                        <label class=\"control-label col-sm-4\" for=\"user\">User:</label>\n                        <div class=\"col-sm-6\">\n                            <input class=\"form-control\" id=\"user\" placeholder=\"Select a user\" readonly  value=\"{{selectedUser}}\" formControlName=\"UserIdControl\">\n                        </div>\n                        <div class=\"col-sm-2\">\n                            <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#searchUsersModal\">Search</button>\n                        </div>\n                    </div>\n                    <div class=\"col-md-3\"></div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-3\"></div>\n                    <div class=\"form-group col-md-6\">\n                        <div class=\"col-md-4\"></div>\n                        <div class=\"col-md-8\">\n                            <button type=\"submit\" [disabled]=\"addTaskForm.invalid\" class=\"btn btn-md btn-success\">{{btnMode}}</button>\n                            <button type=\"button\" (click)=\"clearDate()\"  class=\"btn btn-md btn-danger\">Reset</button>\n                        </div>\n                    </div>\n                    <div class=\"col-md-3\"></div>\n                </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- Modal - Search Projects -->\n<div id=\"searchProjectsModal\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog modal-lg\">\n        <!-- Modal content-->\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                <h4 class=\"modal-title\">Search Projects</h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <p-dataTable [value]=\"projectsList\">\n                            <p-column field=\"projectId\" header=\"Project ID\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>\n                            <p-column field=\"projectName\" header=\"Project Name\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>\n                            <p-column field=\"startDate\" header=\"Start Date\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"> <ng-template let-col let-project=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\n                                <span>{{project[col.field]|date:'dd/MM/yyyy'}}</span>\n                            </ng-template></p-column>\n                            <p-column field=\"endDate\" header=\"End Date\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"> <ng-template let-col let-project=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\n                                <span>{{project[col.field]|date:'dd/MM/yyyy'}}</span>\n                            </ng-template></p-column>\n                            <p-column field=\"priority\" header=\"priority\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>\n                            <p-column field=\"managerName\" header=\"Manager\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>                            \n                            <p-column>\n                                <ng-template let-project=\"rowData\" pTemplate=\"body\">\n                                    <div align=\"center\">\n                                        <button type=\"button\" class=\"btn btn-success btn-sm\" id=\"assignProject\" (click)=\"selectProject(project.projectName, project.projectId)\" data-dismiss=\"modal\">Select</button>\n                                    </div>\n                                </ng-template>\n                            </p-column>\n                        </p-dataTable>\n                    </div>\n                </div>\n                <br>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Modal - Search Parent Tasks -->\n<div id=\"searchPTasksModal\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog modal-lg\">\n        <!-- Modal content-->\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                <h4 class=\"modal-title\">Search Parent Task</h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <p-dataTable [value]=\"parentTasksList\">\n                            <p-column field=\"parentId\" header=\"Parent ID\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>\n                            <p-column field=\"parentName\" header=\"Parent Task Name\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>\n                            <p-column>\n                                <ng-template let-pTask=\"rowData\" pTemplate=\"body\">\n                                    <div align=\"center\">\n                                        <button type=\"button\" class=\"btn btn-success btn-sm\" id=\"assignProject\" (click)=\"selectPTask(pTask.parentId, pTask.parentName)\"\n                                            data-dismiss=\"modal\">Select</button>\n                                    </div>\n                                </ng-template>\n                            </p-column>\n                        </p-dataTable>\n                    </div>\n                </div>\n                <br>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n            </div>\n\n        </div>\n    </div>\n</div>\n<!-- Modal - Search Users -->\n<div id=\"searchUsersModal\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog modal-lg\">\n\n        <!-- Modal content-->\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                <h4 class=\"modal-title\">Search Users</h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <p-dataTable [value]=\"usersList\">\n                            <p-column field=\"userId\" header=\"User ID\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>\n                            <p-column field=\"firstName\" header=\"First Name\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>\n                            <p-column field=\"lastName\" header=\"Last Name\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>\n                            <p-column field=\"employeeId\" header=\"Employee ID\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>\n                            <p-column field=\"projectId\" header=\"Project ID\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>\n                          \n                            <p-column>\n                                <ng-template let-user=\"rowData\" pTemplate=\"body\">\n                                    <button type=\"button\" class=\"btn btn-success btn-sm\" id=\"assignUser\" (click)=\"assignUser(user.userId, user.firstName + ' ' + user.lastName)\" data-dismiss=\"modal\">Assign</button>\n                                </ng-template>\n                            </p-column>\n                        </p-dataTable>\n                    </div>\n                </div>\n                <br>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/add-task/add-task.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-task/add-task.component.ts ***!
  \************************************************/
/*! exports provided: AddTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTaskComponent", function() { return AddTaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _view_task_view_task_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view-task/view-task.service */ "./src/app/view-task/view-task.service.ts");
/* harmony import */ var _add_user_add_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../add-user/add-user.service */ "./src/app/add-user/add-user.service.ts");
/* harmony import */ var _utilities_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utilities/common-service */ "./src/app/utilities/common-service.ts");








var AddTaskComponent = /** @class */ (function () {
    function AddTaskComponent(formBuilder, router, taskService, service, userService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.taskService = taskService;
        this.service = service;
        this.userService = userService;
        this.formMode = 'Add Task';
        this.btnMode = 'Add';
        this.msgs = [];
        this.selectedProject = '';
        this.selectedUser = '';
        this.selectedTask = '';
        this.selectedUserId = null;
        this.selectedPTaskId = null;
        this.selectedProjectId = null;
        this.projectsList = [];
        this.parentTasksList = [];
        this.usersList = [];
        // check the route for edit and then subscribe to data service
        if (this.router.url === '/edittask') {
            if (this.taskService.task !== null) {
                this.editMode();
                this.onFormEditInit(this.taskService.task);
            }
        }
        else {
            this.onFormInit();
            this.enableControls();
        }
        // this.addTaskForm.valueChanges.subscribe(() => {
        //     if (this.addTaskForm.controls['IsParentTaskControl'].value === true) {
        //         this.disableControls();
        //     }
        //     else {
        //         this.enableControls();
        //     }
        // });
    }
    AddTaskComponent.prototype.handleChange = function (event) {
        console.log(this.addTaskForm.get('IsParentTaskControl').value);
        if (this.addTaskForm.get('IsParentTaskControl').value === false) {
            this.enableControls();
        }
        else {
            this.disableControls();
        }
    };
    AddTaskComponent.prototype.disableControls = function () {
        this.addTaskForm.get('priorityControl').disable();
        this.addTaskForm.get('priorityDisplayControl').disable();
        this.addTaskForm.get('StartDateControl').disable();
        this.addTaskForm.get('EndDateControl').disable();
    };
    AddTaskComponent.prototype.enableControls = function () {
        this.addTaskForm.get('priorityControl').enable();
        this.addTaskForm.get('StartDateControl').enable();
        this.addTaskForm.get('EndDateControl').enable();
        this.addTaskForm.get('priorityDisplayControl').enable();
    };
    AddTaskComponent.prototype.onFormInit = function () {
        this.addTaskForm = this.formBuilder.group({
            TaskId: [0],
            ProjectIdControl: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            taskNameControl: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            IsParentTaskControl: [false],
            priorityControl: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            priorityDisplayControl: [null],
            ParentTaskControl: [null],
            StartDateControl: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            EndDateControl: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            UserIdControl: [null]
        });
    };
    AddTaskComponent.prototype.onFormEditInit = function (task) {
        this.addTaskForm = this.formBuilder.group({
            TaskId: [task.taskId],
            ProjectIdControl: [task.projectId, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            taskNameControl: [task.taskName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            IsParentTaskControl: [task.parentId === null ? true : false],
            priorityControl: [task.priority, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            priorityDisplayControl: [task.priority],
            ParentTaskControl: [task.parentId],
            StartDateControl: [task.endDate, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            EndDateControl: [task.startDate, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            UserIdControl: [task.userId]
        });
        this.selectedProject = task.projectName;
        this.selectedUser = task.userName;
        this.selectedPTaskId = task.parentId;
        this.selectedTask = task.parentName;
    };
    AddTaskComponent.prototype.ngOnInit = function () {
        this.getAllProject();
        this.getAllParentTask();
        this.getAllUsers();
    };
    AddTaskComponent.prototype.getAllProject = function () {
        var _this = this;
        this.projectsList = [];
        this.service.getAllProject()
            .subscribe(function (data) { _this.projectsList = data; });
    };
    AddTaskComponent.prototype.getAllParentTask = function () {
        var _this = this;
        this.projectsList = [];
        this.service.getAllParentTasks()
            .subscribe(function (data) { _this.parentTasksList = data; });
    };
    AddTaskComponent.prototype.getAllUsers = function () {
        var _this = this;
        this.usersList = [];
        this.userService.getUsers()
            .subscribe(function (data) { _this.usersList = data; });
    };
    AddTaskComponent.prototype.clearDate = function () {
        // Clear the date using the patchValue function
        this.addTaskForm.reset();
    };
    AddTaskComponent.prototype.selectProject = function (projectName, projectId) {
        this.selectedProjectId = projectId;
        this.selectedProject = projectName;
        this.addTaskForm.patchValue({
            ProjectIdControl: projectId
        });
    };
    AddTaskComponent.prototype.assignUser = function (userId, userName) {
        this.selectedUserId = userId;
        this.selectedUser = userName;
        this.addTaskForm.patchValue({
            UserIdControl: userId
        });
    };
    AddTaskComponent.prototype.selectPTask = function (pTaskId, ptaskName) {
        this.selectedPTaskId = pTaskId;
        this.selectedTask = ptaskName;
        this.addTaskForm.patchValue({
            ParentTaskControl: pTaskId
        });
    };
    AddTaskComponent.prototype.addTaskSubmit = function () {
        var _this = this;
        this.service.updateTask({
            taskId: this.addTaskForm.get('TaskId').value,
            endDate: this.addTaskForm.get('EndDateControl').value,
            projectId: this.addTaskForm.get('ProjectIdControl').value,
            startDate: this.addTaskForm.get('StartDateControl').value,
            parentId: this.addTaskForm.get('ParentTaskControl').value,
            priority: this.addTaskForm.get('priorityControl').value,
            status: true,
            taskName: this.addTaskForm.get('taskNameControl').value,
            userId: this.addTaskForm.get('UserIdControl').value
        })
            .subscribe(function (data) { _this.showMessage(data.status.result, data.status.message); _this.clearDate(); });
    };
    AddTaskComponent.prototype.editMode = function () {
        this.formMode = 'Edit Task';
        this.btnMode = 'Update';
    };
    AddTaskComponent.prototype.showMessage = function (status, message) {
        this.msgs = [];
        if (status === true) {
            this.msgs.push({ severity: 'success', summary: 'Success', detail: message });
        }
        else {
            this.msgs.push({ severity: 'error', summary: 'Error', detail: message });
        }
        this.getAllProject();
    };
    AddTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'add-task',
            template: __webpack_require__(/*! ./add-task.component.html */ "./src/app/add-task/add-task.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default,
            providers: [_view_task_view_task_service__WEBPACK_IMPORTED_MODULE_4__["ViewTaskService"], _add_user_add_user_service__WEBPACK_IMPORTED_MODULE_5__["AddUserService"]],
            styles: [__webpack_require__(/*! ./add-task.component.css */ "./src/app/add-task/add-task.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _utilities_common_service__WEBPACK_IMPORTED_MODULE_6__["TaskService"],
            _view_task_view_task_service__WEBPACK_IMPORTED_MODULE_4__["ViewTaskService"],
            _add_user_add_user_service__WEBPACK_IMPORTED_MODULE_5__["AddUserService"]])
    ], AddTaskComponent);
    return AddTaskComponent;
}());



/***/ }),

/***/ "./src/app/add-user/add-user.component.css":
/*!*************************************************!*\
  !*** ./src/app/add-user/add-user.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row-centered {\r\n    text-align: center;\r\n}\r\n\r\n.row-right {\r\n    text-align: right;\r\n}\r\n\r\n.error {\r\n    font-size: 13px;\r\n    color: #c7254e;\r\n    margin-left: 10px;\r\n    margin-bottom: 10px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXVzZXIvYWRkLXVzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLG1CQUFtQjtFQUNyQiIsImZpbGUiOiJzcmMvYXBwL2FkZC11c2VyL2FkZC11c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93LWNlbnRlcmVkIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnJvdy1yaWdodCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmVycm9yIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiAjYzcyNTRlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/add-user/add-user.component.html":
/*!**************************************************!*\
  !*** ./src/app/add-user/add-user.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-growl [(value)]=\"msgs\" [life]=\"3000\" [sticky]=\"false\"></p-growl>\n<div class=\"container\">\n    <div class=\"row\">\n        <form #f=\"ngForm\" novalidate (ngSubmit)=\"onSave(f.value, f.valid)\">\n\n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\">\n                    <h3 class=\"panel-title\">Add User</h3>\n                </div>\n                <div class=\"panel-body\">\n                    <div class=\"row\">\n                        <div class=\"col-md-3\"></div>\n                        <div class=\"form-group col-md-6\">\n                            <label class=\"control-label col-sm-4\" for=\"firstName\">First Name:</label>\n                            <div class=\"col-sm-8\">\n                                <input class=\"form-control firstName\" id=\"firstName\" [(ngModel)]=\"currentUser.firstName\" name=\"firstName\" #firstName=\"ngModel\" required\n                                    placeholder=\"Enter first name\">\n                            </div>\n                        </div>\n                        <div class=\"col-md-3\"></div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-5\"></div>\n                        <div *ngIf=\"firstName.errors?.required && firstName.touched\" class=\"error col-md-5\">\n                            First Name is required\n                        </div>\n\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-3\"></div>\n                        <div class=\"form-group col-md-6\">\n                            <label class=\"control-label col-sm-4\" for=\"lastName\">Last Name:</label>\n                            <div class=\"col-sm-8\">\n                                <input class=\"form-control\" id=\"lastName\" [(ngModel)]=\"currentUser.lastName\" placeholder=\"Enter last name\" name=\"lastName\"\n                                    #lastName=\"ngModel\" required>\n                            </div>\n                        </div>\n                        <div class=\"col-md-3\"></div>\n                    </div>\n                    <div class=\"row\">\n                            <div class=\"col-md-5\"></div>\n                            <div *ngIf=\"lastName.errors?.required && lastName.touched\" class=\"error col-md-5\">\n                                Last Name is required\n                            </div>\n    \n                        </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-3\"></div>\n                        <div class=\"form-group col-md-6\">\n                            <label class=\"control-label col-sm-4\" for=\"empId\">Employee ID:</label>\n                            <div class=\"col-sm-8\">\n                                <input class=\"form-control\" id=\"empId\" [(ngModel)]=\"currentUser.employeeId\" name=\"empId\" placeholder=\"Enter employee id\"\n                                    #empId=\"ngModel\" required>\n                            </div>\n                        </div>\n                        <div class=\"col-md-3\"></div>\n                    </div>\n                    <div class=\"row\">\n                            <div class=\"col-md-5\"></div>\n                            <div *ngIf=\"empId.errors?.required && empId.touched\" class=\"error col-md-5\">\n                                    Employee ID is required\n                            </div>\n    \n                        </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-3\"></div>\n                        <div class=\"form-group col-md-6\">\n                            <div class=\"col-md-4\"></div>\n                            <div class=\"col-md-8\">\n                                <button type=\"submit\" class=\"btn btn-md btn-primary\" [disabled]=\"f.invalid\">{{saveButtonString}}</button>\n                                <button type=\"button\" class=\"btn btn-md btn-danger\" (click)=\"f.reset();onReset();\">Reset</button>\n                            </div>\n                        </div>\n                        <div class=\"col-xs-3\"></div>\n                    </div>\n                </div>\n            </div>\n        </form>\n\n    </div>\n    <div class=\"row\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n                <h3 class=\"panel-title\">View Users</h3>\n            </div>\n            <div class=\"panel-body\">\n\n                <div class=\"row\">\n                    <div class=\"col-md-1\"></div>\n                    <div class=\"col-md-10\">\n\n                        <p-dataTable [value]=\"userList\">\n                            <p-column field=\"firstName\" header=\"First Name\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>\n                            <p-column field=\"lastName\" header=\"Last Name\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>\n                            <p-column field=\"employeeId\" header=\"Employee ID\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>\n                            <p-column>\n\n                                <ng-template let-user=\"rowData\" pTemplate=\"body\">\n                                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"onEditClick(user)\" aria-label=\"Left Align\">\n                                        <span class=\"fa fa-edit fa-lg\" aria-hidden=\"true\" ></span>\n                                    </button>\n\n                                    <button type=\"button\" class=\"btn btn-danger\" (click)=\"confirmDelete(user)\" aria-label=\"Left Align\">\n                                        <span class=\"fa fa-trash-o fa-lg\" aria-hidden=\"true\"></span>\n                                    </button>\n\n\n\n                                </ng-template>\n                            </p-column>\n                        </p-dataTable>\n\n                    </div>\n                    <div class=\"col-md-1\"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <p-confirmDialog header=\"Confirmation\" icon=\"fa fa-question-circle\" width=\"425\" #cd ></p-confirmDialog>"

/***/ }),

/***/ "./src/app/add-user/add-user.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-user/add-user.component.ts ***!
  \************************************************/
/*! exports provided: AddUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserComponent", function() { return AddUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _add_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-user.service */ "./src/app/add-user/add-user.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_3__);




var AddUserComponent = /** @class */ (function () {
    function AddUserComponent(service, confirmationService) {
        this.service = service;
        this.confirmationService = confirmationService;
        this.msgs = [];
        this._confirmationService = confirmationService;
    }
    AddUserComponent.prototype.ngOnInit = function () {
        this.saveButtonString = 'Add';
        this.onReset();
        this.getUsers();
    };
    AddUserComponent.prototype.onReset = function () {
        this.saveButtonString = 'Add';
        this.currentUser = { userId: 0, employeeId: '', firstName: '', lastName: '' };
        this.form.reset();
    };
    AddUserComponent.prototype.onEditClick = function (user) {
        this.saveButtonString = 'Edit';
        this.currentUser = Object.assign({}, this.currentUser, user);
    };
    AddUserComponent.prototype.onSave = function (user) {
        this.updateUser(this.currentUser);
    };
    AddUserComponent.prototype.updateUser = function (user) {
        var _this = this;
        this.service.updateUsers(user)
            .subscribe(function (data) {
            _this.showMessage(data.status.result, data.status.message);
        });
    };
    AddUserComponent.prototype.showMessage = function (status, message) {
        this.msgs = [];
        if (status === true) {
            this.msgs.push({ severity: 'success', summary: 'Success', detail: message });
        }
        else {
            this.msgs.push({ severity: 'error', summary: 'Error', detail: message });
        }
        this.getUsers();
        this.onReset();
    };
    AddUserComponent.prototype.getUsers = function () {
        var _this = this;
        this.service.getUsers()
            .subscribe(function (data) { _this.userList = data; });
    };
    AddUserComponent.prototype.confirmDelete = function (user) {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Are you sure that you want to delete user : ' + user.employeeId + '?',
            accept: function () {
                _this.service.deleteUser(user)
                    .subscribe(function (data) {
                    _this.showMessage(data.result, data.message);
                });
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddUserComponent.prototype, "form", void 0);
    AddUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./add-user.component.html */ "./src/app/add-user/add-user.component.html"),
            providers: [_add_user_service__WEBPACK_IMPORTED_MODULE_2__["AddUserService"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"]],
            styles: [__webpack_require__(/*! ./add-user.component.css */ "./src/app/add-user/add-user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_add_user_service__WEBPACK_IMPORTED_MODULE_2__["AddUserService"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"]])
    ], AddUserComponent);
    return AddUserComponent;
}());



/***/ }),

/***/ "./src/app/add-user/add-user.service.ts":
/*!**********************************************!*\
  !*** ./src/app/add-user/add-user.service.ts ***!
  \**********************************************/
/*! exports provided: AddUserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserService", function() { return AddUserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AddUserService = /** @class */ (function () {
    function AddUserService(http) {
        this.http = http;
        this.apiEndPOint = 'http://localhost:9000/FSD-Project-manager-0.0.1-SNAPSHOT';
    }
    AddUserService.prototype.getUsers = function () {
        return this.http.get(this.apiEndPOint + '/user/getAllUsers');
    };
    AddUserService.prototype.updateUsers = function (user) {
        return this.http.post(this.apiEndPOint + '/user/updateUser', user);
    };
    AddUserService.prototype.deleteUser = function (user) {
        return this.http.post(this.apiEndPOint + '/user/DeleteUser', user);
    };
    AddUserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AddUserService);
    return AddUserService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-user/add-user.component */ "./src/app/add-user/add-user.component.ts");
/* harmony import */ var _add_project_add_project_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-project/add-project.component */ "./src/app/add-project/add-project.component.ts");
/* harmony import */ var _add_task_add_task_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-task/add-task.component */ "./src/app/add-task/add-task.component.ts");
/* harmony import */ var _view_task_view_task_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-task/view-task.component */ "./src/app/view-task/view-task.component.ts");







var routes = [
    { path: '', redirectTo: '/adduser', pathMatch: 'full' },
    { path: 'adduser', component: _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_3__["AddUserComponent"] },
    { path: 'addproject', component: _add_project_add_project_component__WEBPACK_IMPORTED_MODULE_4__["AddProjectComponent"] },
    { path: 'addtask', component: _add_task_add_task_component__WEBPACK_IMPORTED_MODULE_5__["AddTaskComponent"] },
    { path: 'viewtask', component: _view_task_view_task_component__WEBPACK_IMPORTED_MODULE_6__["ViewTaskComponent"] },
    { path: 'edittask', component: _add_task_add_task_component__WEBPACK_IMPORTED_MODULE_5__["AddTaskComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error {\r\n    font-size: 13px;\r\n    color: #c7254e;\r\n    background: #f9f2f4;\r\n    border-radius: 3px;\r\n    padding: 15px;\r\n    margin: -26px 0 15px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG9CQUFvQjtFQUN0QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiAjYzcyNTRlO1xyXG4gICAgYmFja2dyb3VuZDogI2Y5ZjJmNDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBtYXJnaW46IC0yNnB4IDAgMTVweDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-static-top\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"#\">Project Manager</a>\n    </div>\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li>\n        <a routerLink=\"/adduser\" routerLinkActive=\"active\">Add User</a>\n      </li>\n      <li>\n        <a routerLink=\"/addproject\" routerLinkActive=\"active\">Add Project</a>\n      </li>\n      <li>\n        <a routerLink=\"/addtask\" routerLinkActive=\"active\">Add Task</a>\n      </li>\n      <li>\n        <a routerLink=\"/viewtask\" routerLinkActive=\"active\">View Task</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Project Manager';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-user/add-user.component */ "./src/app/add-user/add-user.component.ts");
/* harmony import */ var _add_project_add_project_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-project/add-project.component */ "./src/app/add-project/add-project.component.ts");
/* harmony import */ var _add_task_add_task_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-task/add-task.component */ "./src/app/add-task/add-task.component.ts");
/* harmony import */ var _view_task_view_task_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view-task/view-task.component */ "./src/app/view-task/view-task.component.ts");
/* harmony import */ var ng2_ion_range_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-ion-range-slider */ "./node_modules/ng2-ion-range-slider/index.js");
/* harmony import */ var ng2_ion_range_slider__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ng2_ion_range_slider__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var primeng_datatable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/datatable */ "./node_modules/primeng/datatable.js");
/* harmony import */ var primeng_datatable__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_datatable__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primeng_growl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/growl */ "./node_modules/primeng/growl.js");
/* harmony import */ var primeng_growl__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_growl__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/confirmdialog */ "./node_modules/primeng/confirmdialog.js");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/slider */ "./node_modules/primeng/slider.js");
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_slider__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _utilities_common_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./utilities/common-service */ "./src/app/utilities/common-service.ts");



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_5__["AddUserComponent"],
                _add_project_add_project_component__WEBPACK_IMPORTED_MODULE_6__["AddProjectComponent"],
                _add_task_add_task_component__WEBPACK_IMPORTED_MODULE_7__["AddTaskComponent"],
                _view_task_view_task_component__WEBPACK_IMPORTED_MODULE_8__["ViewTaskComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                ng2_ion_range_slider__WEBPACK_IMPORTED_MODULE_9__["IonRangeSliderModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], primeng_datatable__WEBPACK_IMPORTED_MODULE_12__["DataTableModule"], primeng_growl__WEBPACK_IMPORTED_MODULE_13__["GrowlModule"], primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_14__["ConfirmDialogModule"], primeng_slider__WEBPACK_IMPORTED_MODULE_16__["SliderModule"], primeng_calendar__WEBPACK_IMPORTED_MODULE_17__["CalendarModule"]
            ],
            providers: [_utilities_common_service__WEBPACK_IMPORTED_MODULE_18__["TaskService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/utilities/common-service.ts":
/*!*********************************************!*\
  !*** ./src/app/utilities/common-service.ts ***!
  \*********************************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TaskService = /** @class */ (function () {
    function TaskService() {
    }
    TaskService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "./src/app/view-task/view-task.component.css":
/*!***************************************************!*\
  !*** ./src/app/view-task/view-task.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row-centered {\r\n    text-align: center;\r\n}\r\n\r\n.row-right {\r\n    text-align: right;\r\n    padding-right: 2%;\r\n}\r\n\r\n.checkbox-padding {\r\n    padding-left: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy10YXNrL3ZpZXctdGFzay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctdGFzay92aWV3LXRhc2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3ctY2VudGVyZWQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucm93LXJpZ2h0IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgcGFkZGluZy1yaWdodDogMiU7XHJcbn1cclxuXHJcbi5jaGVja2JveC1wYWRkaW5nIHtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/view-task/view-task.component.html":
/*!****************************************************!*\
  !*** ./src/app/view-task/view-task.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-growl [(value)]=\"msgs\" [life]=\"3000\" [sticky]=\"false\"></p-growl>\n\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n                <h3 class=\"panel-title\">View Tasks</h3>\n            </div>\n            <div class=\"panel-body\">\n                <div class=\"row\">            \n                    <div class=\"form-group col-md-6\">\n                        <label class=\"control-label col-sm-2\" for=\"project\">Project:</label>\n                        <div class=\"col-sm-4\">\n                            <input class=\"form-control\" id=\"project\" placeholder=\"Select the Project\" readonly value=\"{{selectedProject}}\">\n                        </div>\n                        <div class=\"col-sm-2\">\n                            <button type=\"button\" class=\"btn btn-primary btn-sm\" data-toggle=\"modal\" data-target=\"#searchProjectsModal\">Search</button>\n                        </div>\n                    </div>            \n                </div>            \n                <br>\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <p-dataTable [value]=\"tasksList\">\n                            <p-column field=\"taskId\" header=\"Task ID\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>\n                            <p-column field=\"taskName\" header=\"Task Name\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>\n                            <p-column field=\"parentName\" header=\"Parent Task\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>\n                          \n                            <p-column field=\"priority\" header=\"priority\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>\n                            <p-column field=\"startDate\" header=\"Start Date\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\">\n                                <ng-template let-col let-project=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\n                                    <span>{{project[col.field]|date:'dd/MM/yyyy'}}</span>\n                                </ng-template>\n                            </p-column>\n                            <p-column field=\"endDate\" header=\"End Date\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"> <ng-template let-col let-project=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\n                                <span>{{project[col.field]|date:'dd/MM/yyyy'}}</span>\n                            </ng-template></p-column>\n                            <p-column field=\"status\" header=\"status\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\">\n                                    <ng-template let-col let-project=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\n                                            <span>{{project[col.field]==true?'Active':'Ended'}}</span>\n                                        </ng-template>\n                            </p-column>\n                            \n                            <p-column field=\"status\">\n                                <ng-template let-col let-project=\"rowData\" pTemplate=\"body\" >\n                                    \n                                    <div align=\"center\" *ngIf=\"project[col.field]\">\n                                        <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"editTask(project)\">Edit</button>\n                                        <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"endTask(project)\">End Task</button>\n                                    </div>\n                                </ng-template>\n                            </p-column>\n                        </p-dataTable>            \n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- Modal - Search Projects -->\n<div id=\"searchProjectsModal\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog modal-lg\">\n        <!-- Modal content-->\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                <h4 class=\"modal-title\">Search Projects</h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <p-dataTable [value]=\"projectsList\">\n                            <p-column field=\"projectId\" header=\"Project ID\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>\n                            <p-column field=\"projectName\" header=\"Project Name\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>\n                            <p-column field=\"startDate\" header=\"Start Date\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"> <ng-template let-col let-project=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\n                                <span>{{project[col.field]|date:'dd/MM/yyyy'}}</span>\n                            </ng-template></p-column>\n                            <p-column field=\"endDate\" header=\"End Date\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"> <ng-template let-col let-project=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\n                                <span>{{project[col.field]|date:'dd/MM/yyyy'}}</span>\n                            </ng-template></p-column>\n                            <p-column field=\"priority\" header=\"priority\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>\n                            <p-column field=\"managerName\" header=\"Manager\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>                            \n                            <p-column>\n                                <ng-template let-project=\"rowData\" pTemplate=\"body\">\n                                    <div align=\"center\">\n                                        <button type=\"button\" class=\"btn btn-success btn-sm\" id=\"assignProject\" (click)=\"assignProject(project.projectName, project.projectId)\" data-dismiss=\"modal\">Select</button>\n                                    </div>\n                                </ng-template>\n                            </p-column>\n                        </p-dataTable>\n                    </div>\n                </div>\n                <br>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<p-confirmDialog header=\"Confirmation\" icon=\"fa fa-question-circle\" width=\"425\"  ></p-confirmDialog>\n"

/***/ }),

/***/ "./src/app/view-task/view-task.component.ts":
/*!**************************************************!*\
  !*** ./src/app/view-task/view-task.component.ts ***!
  \**************************************************/
/*! exports provided: ViewTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewTaskComponent", function() { return ViewTaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _view_task_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-task.service */ "./src/app/view-task/view-task.service.ts");
/* harmony import */ var _utilities_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilities/common-service */ "./src/app/utilities/common-service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_5__);






var ViewTaskComponent = /** @class */ (function () {
    function ViewTaskComponent(router, taskService, service, confirmationService) {
        this.router = router;
        this.taskService = taskService;
        this.service = service;
        this.confirmationService = confirmationService;
        this.msgs = [];
        this.tasksList = [];
        this.projectsList = [];
    }
    ViewTaskComponent.prototype.ngOnInit = function () {
        this.getAllProject();
    };
    ViewTaskComponent.prototype.assignProject = function (projName, projId) {
        this.selectedProjectId = projId;
        this.selectedProject = projName;
        this.getAllTask(projId);
    };
    ViewTaskComponent.prototype.getAllProject = function () {
        var _this = this;
        this.projectsList = [];
        this.service.getAllProject()
            .subscribe(function (data) { _this.projectsList = data; });
    };
    ViewTaskComponent.prototype.getAllTask = function (id) {
        var _this = this;
        this.service.getAllTasks()
            .subscribe(function (data) {
            _this.tasksList = data.filter(function (task) { return task.projectId === id; });
        });
    };
    ViewTaskComponent.prototype.editTask = function (task) {
        this.taskService.task = task;
        this.router.navigate(['/edittask']);
    };
    ViewTaskComponent.prototype.endTask = function (task) {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Are you sure that you want to end this task?',
            accept: function () {
                task.status = false;
                _this.service.updateTask(task)
                    .subscribe(function (data) { _this.showMessage(data.status.result, data.status.message); });
            }
        });
    };
    ViewTaskComponent.prototype.showMessage = function (status, message) {
        this.msgs = [];
        if (status === true) {
            this.msgs.push({ severity: 'success', summary: 'Success', detail: message });
        }
        else {
            this.msgs.push({ severity: 'error', summary: 'Error', detail: message });
        }
        this.getAllTask(this.selectedProjectId);
    };
    ViewTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./view-task.component.html */ "./src/app/view-task/view-task.component.html"),
            providers: [_view_task_service__WEBPACK_IMPORTED_MODULE_3__["ViewTaskService"], primeng_api__WEBPACK_IMPORTED_MODULE_5__["ConfirmationService"]],
            styles: [__webpack_require__(/*! ./view-task.component.css */ "./src/app/view-task/view-task.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _utilities_common_service__WEBPACK_IMPORTED_MODULE_4__["TaskService"], _view_task_service__WEBPACK_IMPORTED_MODULE_3__["ViewTaskService"], primeng_api__WEBPACK_IMPORTED_MODULE_5__["ConfirmationService"]])
    ], ViewTaskComponent);
    return ViewTaskComponent;
}());



/***/ }),

/***/ "./src/app/view-task/view-task.service.ts":
/*!************************************************!*\
  !*** ./src/app/view-task/view-task.service.ts ***!
  \************************************************/
/*! exports provided: ViewTaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewTaskService", function() { return ViewTaskService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var ViewTaskService = /** @class */ (function () {
    function ViewTaskService(http) {
        this.http = http;
    }
    ViewTaskService.prototype.getAllProject = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/project/getAllProjects');
    };
    ViewTaskService.prototype.getAllTasks = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/task/getAllTasks');
    };
    ViewTaskService.prototype.updateTask = function (task) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/task/updateTask', task);
    };
    ViewTaskService.prototype.getAllParentTasks = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/task/getAllParentTasks');
    };
    ViewTaskService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ViewTaskService);
    return ViewTaskService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: 'http://localhost:9000/FSD-Project-manager-0.0.1-SNAPSHOT'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Admin\FSD-Task-manager-js\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map