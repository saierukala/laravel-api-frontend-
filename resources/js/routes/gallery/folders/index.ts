import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\GalleryController::index
 * @see app/Http/Controllers/GalleryController.php:14
 * @route '/gallery'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/gallery',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\GalleryController::index
 * @see app/Http/Controllers/GalleryController.php:14
 * @route '/gallery'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\GalleryController::index
 * @see app/Http/Controllers/GalleryController.php:14
 * @route '/gallery'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\GalleryController::index
 * @see app/Http/Controllers/GalleryController.php:14
 * @route '/gallery'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\GalleryController::index
 * @see app/Http/Controllers/GalleryController.php:14
 * @route '/gallery'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\GalleryController::index
 * @see app/Http/Controllers/GalleryController.php:14
 * @route '/gallery'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\GalleryController::index
 * @see app/Http/Controllers/GalleryController.php:14
 * @route '/gallery'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\GalleryController::create
 * @see app/Http/Controllers/GalleryController.php:38
 * @route '/gallery/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/gallery/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\GalleryController::create
 * @see app/Http/Controllers/GalleryController.php:38
 * @route '/gallery/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\GalleryController::create
 * @see app/Http/Controllers/GalleryController.php:38
 * @route '/gallery/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\GalleryController::create
 * @see app/Http/Controllers/GalleryController.php:38
 * @route '/gallery/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\GalleryController::create
 * @see app/Http/Controllers/GalleryController.php:38
 * @route '/gallery/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\GalleryController::create
 * @see app/Http/Controllers/GalleryController.php:38
 * @route '/gallery/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\GalleryController::create
 * @see app/Http/Controllers/GalleryController.php:38
 * @route '/gallery/create'
 */
        createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
/**
* @see \App\Http\Controllers\GalleryController::store
 * @see app/Http/Controllers/GalleryController.php:43
 * @route '/gallery'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/gallery',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\GalleryController::store
 * @see app/Http/Controllers/GalleryController.php:43
 * @route '/gallery'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\GalleryController::store
 * @see app/Http/Controllers/GalleryController.php:43
 * @route '/gallery'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\GalleryController::store
 * @see app/Http/Controllers/GalleryController.php:43
 * @route '/gallery'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\GalleryController::store
 * @see app/Http/Controllers/GalleryController.php:43
 * @route '/gallery'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\GalleryController::show
 * @see app/Http/Controllers/GalleryController.php:55
 * @route '/gallery/{folder}'
 */
export const show = (args: { folder: number | { id: number } } | [folder: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/gallery/{folder}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\GalleryController::show
 * @see app/Http/Controllers/GalleryController.php:55
 * @route '/gallery/{folder}'
 */
show.url = (args: { folder: number | { id: number } } | [folder: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { folder: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { folder: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    folder: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        folder: typeof args.folder === 'object'
                ? args.folder.id
                : args.folder,
                }

    return show.definition.url
            .replace('{folder}', parsedArgs.folder.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\GalleryController::show
 * @see app/Http/Controllers/GalleryController.php:55
 * @route '/gallery/{folder}'
 */
show.get = (args: { folder: number | { id: number } } | [folder: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\GalleryController::show
 * @see app/Http/Controllers/GalleryController.php:55
 * @route '/gallery/{folder}'
 */
show.head = (args: { folder: number | { id: number } } | [folder: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\GalleryController::show
 * @see app/Http/Controllers/GalleryController.php:55
 * @route '/gallery/{folder}'
 */
    const showForm = (args: { folder: number | { id: number } } | [folder: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\GalleryController::show
 * @see app/Http/Controllers/GalleryController.php:55
 * @route '/gallery/{folder}'
 */
        showForm.get = (args: { folder: number | { id: number } } | [folder: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\GalleryController::show
 * @see app/Http/Controllers/GalleryController.php:55
 * @route '/gallery/{folder}'
 */
        showForm.head = (args: { folder: number | { id: number } } | [folder: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
/**
* @see \App\Http\Controllers\GalleryController::edit
 * @see app/Http/Controllers/GalleryController.php:60
 * @route '/gallery/{folder}/edit'
 */
export const edit = (args: { folder: number | { id: number } } | [folder: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/gallery/{folder}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\GalleryController::edit
 * @see app/Http/Controllers/GalleryController.php:60
 * @route '/gallery/{folder}/edit'
 */
edit.url = (args: { folder: number | { id: number } } | [folder: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { folder: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { folder: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    folder: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        folder: typeof args.folder === 'object'
                ? args.folder.id
                : args.folder,
                }

    return edit.definition.url
            .replace('{folder}', parsedArgs.folder.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\GalleryController::edit
 * @see app/Http/Controllers/GalleryController.php:60
 * @route '/gallery/{folder}/edit'
 */
edit.get = (args: { folder: number | { id: number } } | [folder: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\GalleryController::edit
 * @see app/Http/Controllers/GalleryController.php:60
 * @route '/gallery/{folder}/edit'
 */
edit.head = (args: { folder: number | { id: number } } | [folder: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\GalleryController::edit
 * @see app/Http/Controllers/GalleryController.php:60
 * @route '/gallery/{folder}/edit'
 */
    const editForm = (args: { folder: number | { id: number } } | [folder: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\GalleryController::edit
 * @see app/Http/Controllers/GalleryController.php:60
 * @route '/gallery/{folder}/edit'
 */
        editForm.get = (args: { folder: number | { id: number } } | [folder: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\GalleryController::edit
 * @see app/Http/Controllers/GalleryController.php:60
 * @route '/gallery/{folder}/edit'
 */
        editForm.head = (args: { folder: number | { id: number } } | [folder: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
/**
* @see \App\Http\Controllers\GalleryController::update
 * @see app/Http/Controllers/GalleryController.php:65
 * @route '/gallery/{folder}'
 */
export const update = (args: { folder: number | { id: number } } | [folder: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/gallery/{folder}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\GalleryController::update
 * @see app/Http/Controllers/GalleryController.php:65
 * @route '/gallery/{folder}'
 */
update.url = (args: { folder: number | { id: number } } | [folder: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { folder: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { folder: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    folder: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        folder: typeof args.folder === 'object'
                ? args.folder.id
                : args.folder,
                }

    return update.definition.url
            .replace('{folder}', parsedArgs.folder.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\GalleryController::update
 * @see app/Http/Controllers/GalleryController.php:65
 * @route '/gallery/{folder}'
 */
update.put = (args: { folder: number | { id: number } } | [folder: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\GalleryController::update
 * @see app/Http/Controllers/GalleryController.php:65
 * @route '/gallery/{folder}'
 */
update.patch = (args: { folder: number | { id: number } } | [folder: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\GalleryController::update
 * @see app/Http/Controllers/GalleryController.php:65
 * @route '/gallery/{folder}'
 */
    const updateForm = (args: { folder: number | { id: number } } | [folder: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\GalleryController::update
 * @see app/Http/Controllers/GalleryController.php:65
 * @route '/gallery/{folder}'
 */
        updateForm.put = (args: { folder: number | { id: number } } | [folder: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\GalleryController::update
 * @see app/Http/Controllers/GalleryController.php:65
 * @route '/gallery/{folder}'
 */
        updateForm.patch = (args: { folder: number | { id: number } } | [folder: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\GalleryController::destroy
 * @see app/Http/Controllers/GalleryController.php:77
 * @route '/gallery/{folder}'
 */
export const destroy = (args: { folder: number | { id: number } } | [folder: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/gallery/{folder}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\GalleryController::destroy
 * @see app/Http/Controllers/GalleryController.php:77
 * @route '/gallery/{folder}'
 */
destroy.url = (args: { folder: number | { id: number } } | [folder: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { folder: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { folder: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    folder: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        folder: typeof args.folder === 'object'
                ? args.folder.id
                : args.folder,
                }

    return destroy.definition.url
            .replace('{folder}', parsedArgs.folder.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\GalleryController::destroy
 * @see app/Http/Controllers/GalleryController.php:77
 * @route '/gallery/{folder}'
 */
destroy.delete = (args: { folder: number | { id: number } } | [folder: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\GalleryController::destroy
 * @see app/Http/Controllers/GalleryController.php:77
 * @route '/gallery/{folder}'
 */
    const destroyForm = (args: { folder: number | { id: number } } | [folder: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\GalleryController::destroy
 * @see app/Http/Controllers/GalleryController.php:77
 * @route '/gallery/{folder}'
 */
        destroyForm.delete = (args: { folder: number | { id: number } } | [folder: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const folders = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default folders