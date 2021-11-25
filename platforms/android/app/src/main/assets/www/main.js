(self["webpackChunktypeorm"] = self["webpackChunktypeorm"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppRoutingModule = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ 64762);
const core_1 = __webpack_require__(/*! @angular/core */ 37716);
const router_1 = __webpack_require__(/*! @angular/router */ 39895);
const routes = [
    {
        path: '',
        redirectTo: 'folder/Inbox',
        pathMatch: 'full'
    },
    {
        path: 'folder/:id',
        loadChildren: () => Promise.resolve().then(() => __webpack_require__(/*! ./folder/folder.module */ 3412)).then(m => m.FolderPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot(routes, { preloadingStrategy: router_1.PreloadAllModules })
        ],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _asyncToGenerator = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator */ 91052).default;

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.AppComponent = void 0;

const tslib_1 = __webpack_require__(/*! tslib */ 64762);

const core_1 = __webpack_require__(/*! @angular/core */ 37716);

const ngx_1 = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 73494);

const ngx_2 = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 51524);

const angular_1 = __webpack_require__(/*! @ionic/angular */ 80476);

const author_1 = __webpack_require__(/*! ../entities/author */ 78003);

const category_1 = __webpack_require__(/*! ../entities/category */ 36236);

const post_1 = __webpack_require__(/*! ../entities/post */ 97295);

const typeorm_1 = __webpack_require__(/*! typeorm */ 85142);

let AppComponent = class AppComponent {
  constructor(platform, statusBar, splashScreen) {
    this.appPages = [{
      title: 'Inbox',
      url: '/folder/Inbox',
      icon: 'mail'
    }, {
      title: 'Outbox',
      url: '/folder/Outbox',
      icon: 'paper-plane'
    }, {
      title: 'Favorites',
      url: '/folder/Favorites',
      icon: 'heart'
    }, {
      title: 'Archived',
      url: '/folder/Archived',
      icon: 'archive'
    }, {
      title: 'Trash',
      url: '/folder/Trash',
      icon: 'trash'
    }, {
      title: 'Spam',
      url: '/folder/Spam',
      icon: 'warning'
    }];
    this.labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
    platform.ready().then( /*#__PURE__*/_asyncToGenerator(function* () {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide(); // Depending on the machine the app is running on, configure
      // different database connections

      if (platform.is('cordova')) {
        // Running on device or emulator
        yield typeorm_1.createConnection({
          type: 'cordova',
          database: 'test',
          location: 'default',
          logging: ['error', 'query', 'schema'],
          synchronize: true,
          entities: [author_1.Author, category_1.Category, post_1.Post]
        });
      } else {
        // Running app in browser
        yield typeorm_1.createConnection({
          type: 'sqljs',
          autoSave: true,
          location: 'browser',
          logging: ['error', 'query', 'schema'],
          synchronize: true,
          entities: [author_1.Author, category_1.Category, post_1.Post]
        });
      }
    }));
  }

};

AppComponent.ctorParameters = () => [{
  type: angular_1.Platform
}, {
  type: ngx_1.StatusBar
}, {
  type: ngx_2.SplashScreen
}];

AppComponent = tslib_1.__decorate([core_1.Component({
  selector: 'app-root',
  template: __webpack_require__(/*! !raw-loader!./app.component.html */ 91106).default,
  styles: [__webpack_require__(/*! ./app.component.scss */ 43069).default]
}), tslib_1.__metadata("design:paramtypes", [angular_1.Platform, ngx_1.StatusBar, ngx_2.SplashScreen])], AppComponent);
exports.AppComponent = AppComponent;

/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ 64762);
const core_1 = __webpack_require__(/*! @angular/core */ 37716);
const platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ 39075);
const router_1 = __webpack_require__(/*! @angular/router */ 39895);
const angular_1 = __webpack_require__(/*! @ionic/angular */ 80476);
const app_component_1 = __webpack_require__(/*! ./app.component */ 55041);
const app_routing_module_1 = __webpack_require__(/*! ./app-routing.module */ 90158);
const ngx_1 = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 73494);
const ngx_2 = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 51524);
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    core_1.NgModule({
        declarations: [app_component_1.AppComponent],
        entryComponents: [],
        imports: [platform_browser_1.BrowserModule, angular_1.IonicModule.forRoot(), app_routing_module_1.AppRoutingModule,],
        providers: [{ provide: router_1.RouteReuseStrategy, useClass: angular_1.IonicRouteStrategy },
            ngx_1.StatusBar,
            ngx_2.SplashScreen
        ],
        bootstrap: [app_component_1.AppComponent],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ 59771:
/*!*************************************************!*\
  !*** ./src/app/folder/folder-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FolderPageRoutingModule = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ 64762);
const core_1 = __webpack_require__(/*! @angular/core */ 37716);
const router_1 = __webpack_require__(/*! @angular/router */ 39895);
const folder_page_1 = __webpack_require__(/*! ./folder.page */ 48470);
const routes = [
    {
        path: '',
        component: folder_page_1.FolderPage
    }
];
let FolderPageRoutingModule = class FolderPageRoutingModule {
};
FolderPageRoutingModule = tslib_1.__decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule],
    })
], FolderPageRoutingModule);
exports.FolderPageRoutingModule = FolderPageRoutingModule;


/***/ }),

/***/ 3412:
/*!*****************************************!*\
  !*** ./src/app/folder/folder.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FolderPageModule = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ 64762);
const core_1 = __webpack_require__(/*! @angular/core */ 37716);
const common_1 = __webpack_require__(/*! @angular/common */ 38583);
const forms_1 = __webpack_require__(/*! @angular/forms */ 3679);
const angular_1 = __webpack_require__(/*! @ionic/angular */ 80476);
const folder_routing_module_1 = __webpack_require__(/*! ./folder-routing.module */ 59771);
const folder_page_1 = __webpack_require__(/*! ./folder.page */ 48470);
let FolderPageModule = class FolderPageModule {
};
FolderPageModule = tslib_1.__decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            angular_1.IonicModule,
            folder_routing_module_1.FolderPageRoutingModule
        ],
        declarations: [folder_page_1.FolderPage]
    })
], FolderPageModule);
exports.FolderPageModule = FolderPageModule;


/***/ }),

/***/ 48470:
/*!***************************************!*\
  !*** ./src/app/folder/folder.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _asyncToGenerator = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator */ 91052).default;

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.FolderPage = void 0;

const tslib_1 = __webpack_require__(/*! tslib */ 64762);

const core_1 = __webpack_require__(/*! @angular/core */ 37716);

const router_1 = __webpack_require__(/*! @angular/router */ 39895);

const post_1 = __webpack_require__(/*! ../../entities/post */ 97295);

const typeorm_1 = __webpack_require__(/*! typeorm */ 85142);

const category_1 = __webpack_require__(/*! ../../entities/category */ 36236);

const author_1 = __webpack_require__(/*! ../../entities/author */ 78003);

let FolderPage = class FolderPage {
  constructor(activatedRoute) {
    this.activatedRoute = activatedRoute;
    this.savedPost = false;
    this.loadedPost = null;
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ionViewDidLoad() {
    this.runDemo();
  }

  runDemo() {
    var _this = this;

    return _asyncToGenerator(function* () {
      const category1 = new category_1.Category();
      category1.name = "TypeScript";
      const category2 = new category_1.Category();
      category2.name = "Programming";
      const author = new author_1.Author();
      author.name = "Person";
      const post = new post_1.Post();
      post.title = "Control flow based type analysis";
      post.text = `TypeScript 2.0 implements a control flow-based type analysis for local variables and parameters.`;
      post.categories = [category1, category2];
      post.author = author;
      const postRepository = typeorm_1.getRepository('post');
      yield postRepository.save(post);
      console.log("Post has been saved");
      _this.savedPost = true;
      const loadedPost = yield postRepository.createQueryBuilder('post').innerJoinAndSelect('post.author', 'author').innerJoinAndSelect('post.categories', 'categories').where('post.id = :id', {
        id: post.id
      }).getOne();
      console.log("Post has been loaded: ", loadedPost);
      _this.loadedPost = loadedPost;
    })();
  }

  getCategories() {
    if (this.loadedPost) {
      return this.loadedPost.categories.map(cat => cat.name).join(", ");
    }

    return '';
  }

};

FolderPage.ctorParameters = () => [{
  type: router_1.ActivatedRoute
}];

FolderPage = tslib_1.__decorate([core_1.Component({
  selector: 'app-folder',
  template: __webpack_require__(/*! !raw-loader!./folder.page.html */ 7154).default,
  styles: [__webpack_require__(/*! ./folder.page.scss */ 77065).default]
}), tslib_1.__metadata("design:paramtypes", [router_1.ActivatedRoute])], FolderPage);
exports.FolderPage = FolderPage;

/***/ }),

/***/ 78003:
/*!********************************!*\
  !*** ./src/entities/author.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Author = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ 64762);
const typeorm_1 = __webpack_require__(/*! typeorm */ 85142);
const post_1 = __webpack_require__(/*! ./post */ 97295);
let Author = class Author {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], Author.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], Author.prototype, "name", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Author.prototype, "birthdate", void 0);
tslib_1.__decorate([
    typeorm_1.OneToMany(type => post_1.Post, post => post.author),
    tslib_1.__metadata("design:type", Array)
], Author.prototype, "posts", void 0);
Author = tslib_1.__decorate([
    typeorm_1.Entity('author')
], Author);
exports.Author = Author;


/***/ }),

/***/ 36236:
/*!**********************************!*\
  !*** ./src/entities/category.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Category = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ 64762);
const typeorm_1 = __webpack_require__(/*! typeorm */ 85142);
let Category = class Category {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], Category.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], Category.prototype, "name", void 0);
Category = tslib_1.__decorate([
    typeorm_1.Entity('category')
], Category);
exports.Category = Category;


/***/ }),

/***/ 97295:
/*!******************************!*\
  !*** ./src/entities/post.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Post = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ 64762);
const typeorm_1 = __webpack_require__(/*! typeorm */ 85142);
const category_1 = __webpack_require__(/*! ./category */ 36236);
const author_1 = __webpack_require__(/*! ./author */ 78003);
let Post = class Post {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], Post.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], Post.prototype, "title", void 0);
tslib_1.__decorate([
    typeorm_1.Column("text"),
    tslib_1.__metadata("design:type", String)
], Post.prototype, "text", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToMany(type => category_1.Category, {
        cascade: ['insert']
    }),
    typeorm_1.JoinTable(),
    tslib_1.__metadata("design:type", Array)
], Post.prototype, "categories", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToOne(type => author_1.Author, author => author.posts, {
        cascade: ['insert']
    }),
    tslib_1.__metadata("design:type", author_1.Author)
], Post.prototype, "author", void 0);
Post = tslib_1.__decorate([
    typeorm_1.Entity('post')
], Post);
exports.Post = Post;


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.environment = void 0;
exports.environment = {
    production: false
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

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @angular/core */ 37716);
const platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ 24608);
const app_module_1 = __webpack_require__(/*! ./app/app.module */ 36747);
const environment_1 = __webpack_require__(/*! ./environments/environment */ 92340);
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-action-sheet.entry.js": [
		47321,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		36108,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		31489,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		10305,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		15830,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		37757,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		30392,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		66911,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		30937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		78695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		16034,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		68837,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		34195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		41709,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		33087,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		84513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		58056,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		10862,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		76272,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		71855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		38708,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		23527,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		24694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		19222,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		25277,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		39921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		83122,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		51602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		76164,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		20592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		27162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		81374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		97896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		25043,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		77802,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		29072,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		32191,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		40801,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		67110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		10431,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 43069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJFQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTs7RUFFRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsMkRBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBRUEsbUJBQUE7RUFFQSxjQUFBO0VBRUEsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBQ0Usc0RBQUE7QUFIRjs7QUFNQTtFQUNFLCtCQUFBO0FBSEY7O0FBTUE7RUFDRSxjQUFBO0FBSEY7O0FBTUE7RUFDRSxnQkFBQTtBQUhGOztBQU1BO0VBQ0Usc0JBQUE7QUFIRjs7QUFNQTtFQUNFLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFNQTtFQUNFLCtCQUFBO0FBSEY7O0FBTUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7QUFIRjs7QUFNQTs7RUFFRSxrQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBRUEsb0NBQUE7QUFKRjs7QUFPQTtFQUNFLGlDQUFBO0FBSkYiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDhweDtcbiAgLS1wYWRkaW5nLXRvcDogMjBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3Qge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgbWluLWhlaWdodDogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuXG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG5cbiAgY29sb3I6ICM3NTc1NzU7XG5cbiAgbWluLWhlaWdodDogMjZweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNCk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBjb2xvcjogIzYxNmU3ZTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMjBweCAwIDAgMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgLS1taW4taGVpZ2h0OiA1MHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjNzM4NDlhO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1ub3RlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG5cbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuXG5pb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn0iXX0= */");

/***/ }),

/***/ 77065:
/*!*****************************************!*\
  !*** ./src/app/folder/folder.page.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-menu-button {\n  color: var(--ion-color-primary);\n}\n\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvbGRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtBQUNGIiwiZmlsZSI6ImZvbGRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudS1idXR0b24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4jY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGNvbG9yOiAjOGM4YzhjO1xuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ 91106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" type=\"overlay\">\n      <ion-content>\n        <ion-list id=\"inbox-list\">\n          <ion-list-header>Inbox</ion-list-header>\n          <ion-note>hi@ionicframework.com</ion-note>\n\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\n            <ion-item routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\" routerLinkActive=\"selected\">\n              <ion-icon slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"></ion-icon>\n              <ion-label>{{ p.title }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n\n        <ion-list id=\"labels-list\">\n          <ion-list-header>Labels</ion-list-header>\n\n          <ion-item *ngFor=\"let label of labels\" lines=\"none\">\n            <ion-icon slot=\"start\" ios=\"bookmark-outline\" md=\"bookmark-sharp\"></ion-icon>\n            <ion-label>{{ label }}</ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>\n");

/***/ }),

/***/ 7154:
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/folder.page.html ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{ folder }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">{{ folder }}</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <div id=\"container\">\n    <strong class=\"capitalize\">{{ folder }}</strong>\n    <p>Explore <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://ionicframework.com/docs/components\">UI Components</a></p>\n  </div>\n  <ion-list>\n    <ion-item>\n      <ion-spinner *ngIf=\"!savedPost\" item-start></ion-spinner>\n      <ion-icon *ngIf=\"savedPost\" name=\"checkmark\" item-start color=\"secondary\"></ion-icon>\n      <span>Post saved</span>\n    </ion-item>\n    <ion-item-divider color=\"primary\">Loaded Post</ion-item-divider>\n    <ion-item *ngIf=\"!loadedPost\">Post not loaded</ion-item>\n    <ion-item-group *ngIf=\"loadedPost\">\n      <ion-item>ID: {{loadedPost?.id}}</ion-item>\n      <ion-item>Title: {{loadedPost?.title}}</ion-item>\n      <ion-item>Author: {{loadedPost?.author.name}}</ion-item>\n      <ion-item>Categories: {{getCategories()}}</ion-item>\n    </ion-item-group>\n  </ion-list>\n</ion-content>\n");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map