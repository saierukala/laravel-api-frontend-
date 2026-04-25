import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\GalleryController::upload
 * @see app/Http/Controllers/GalleryController.php:89
 * @route '/gallery/{folder}/images'
 */
export const upload = (args: { folder: number | { id: number } } | [folder: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: upload.url(args, options),
    method: 'post',
})

upload.definition = {
    methods: ["post"],
    url: '/gallery/{folder}/images',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\GalleryController::upload
 * @see app/Http/Controllers/GalleryController.php:89
 * @route '/gallery/{folder}/images'
 */
upload.url = (args: { folder: number | { id: number } } | [folder: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return upload.definition.url
            .replace('{folder}', parsedArgs.folder.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\GalleryController::upload
 * @see app/Http/Controllers/GalleryController.php:89
 * @route '/gallery/{folder}/images'
 */
upload.post = (args: { folder: number | { id: number } } | [folder: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: upload.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\GalleryController::upload
 * @see app/Http/Controllers/GalleryController.php:89
 * @route '/gallery/{folder}/images'
 */
    const uploadForm = (args: { folder: number | { id: number } } | [folder: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: upload.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\GalleryController::upload
 * @see app/Http/Controllers/GalleryController.php:89
 * @route '/gallery/{folder}/images'
 */
        uploadForm.post = (args: { folder: number | { id: number } } | [folder: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: upload.url(args, options),
            method: 'post',
        })
    
    upload.form = uploadForm
/**
* @see \App\Http\Controllers\GalleryController::destroy
 * @see app/Http/Controllers/GalleryController.php:127
 * @route '/gallery/{folder}/images/{image}'
 */
export const destroy = (args: { folder: number | { id: number }, image: number | { id: number } } | [folder: number | { id: number }, image: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/gallery/{folder}/images/{image}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\GalleryController::destroy
 * @see app/Http/Controllers/GalleryController.php:127
 * @route '/gallery/{folder}/images/{image}'
 */
destroy.url = (args: { folder: number | { id: number }, image: number | { id: number } } | [folder: number | { id: number }, image: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    folder: args[0],
                    image: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        folder: typeof args.folder === 'object'
                ? args.folder.id
                : args.folder,
                                image: typeof args.image === 'object'
                ? args.image.id
                : args.image,
                }

    return destroy.definition.url
            .replace('{folder}', parsedArgs.folder.toString())
            .replace('{image}', parsedArgs.image.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\GalleryController::destroy
 * @see app/Http/Controllers/GalleryController.php:127
 * @route '/gallery/{folder}/images/{image}'
 */
destroy.delete = (args: { folder: number | { id: number }, image: number | { id: number } } | [folder: number | { id: number }, image: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\GalleryController::destroy
 * @see app/Http/Controllers/GalleryController.php:127
 * @route '/gallery/{folder}/images/{image}'
 */
    const destroyForm = (args: { folder: number | { id: number }, image: number | { id: number } } | [folder: number | { id: number }, image: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
 * @see app/Http/Controllers/GalleryController.php:127
 * @route '/gallery/{folder}/images/{image}'
 */
        destroyForm.delete = (args: { folder: number | { id: number }, image: number | { id: number } } | [folder: number | { id: number }, image: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const images = {
    upload: Object.assign(upload, upload),
destroy: Object.assign(destroy, destroy),
}

export default images