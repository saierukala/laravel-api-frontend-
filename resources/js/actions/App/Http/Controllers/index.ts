import UserController from './UserController'
import RoleController from './RoleController'
import GalleryController from './GalleryController'
import Settings from './Settings'
const Controllers = {
    UserController: Object.assign(UserController, UserController),
RoleController: Object.assign(RoleController, RoleController),
GalleryController: Object.assign(GalleryController, GalleryController),
Settings: Object.assign(Settings, Settings),
}

export default Controllers