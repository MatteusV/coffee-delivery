module.exports = {

"[project]/src/lib/prisma.ts [rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "prisma": ()=>prisma
});
var __TURBOPACK__external__$40$prisma$2f$client__ = __turbopack_external_require__("@prisma/client", true);
"__TURBOPACK__ecmascript__hoisting__location__";
;
const globalForPrisma = global;
const prisma = globalForPrisma.prisma || new __TURBOPACK__external__$40$prisma$2f$client__["PrismaClient"]({
    log: [
        'query'
    ]
});
if ("TURBOPACK compile-time truthy", 1) globalForPrisma.prisma = prisma;

})()),
"[project]/src/app/api/findUserById.ts [rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

/* __next_internal_action_entry_do_not_use__ {"e3a5b14fe08371d5ad9d70144425faa433ffa49c":"findUserById"} */ __turbopack_esm__({
    "findUserById": ()=>findUserById
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$proxy$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-proxy.js [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$action$2d$encryption$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/app-render/action-encryption.js [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/prisma.ts [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
async function findUserById(userId) {
    const user = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$rsc$5d$__$28$ecmascript$29$__["prisma"].user.findFirst({
        where: {
            id: userId
        },
        select: {
            state: true,
            city: true
        }
    });
    if (!user) {
        return null;
    }
    return user;
}
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"]([
    findUserById
]);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$proxy$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["createActionProxy"]("e3a5b14fe08371d5ad9d70144425faa433ffa49c", null, findUserById);

})()),
"[project]/src/app/api/findUserByEmail.ts [rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

/* __next_internal_action_entry_do_not_use__ {"84fe930077562eb5f5e301eb6e8ebe5bc7da85e3":"findUserByEmail"} */ __turbopack_esm__({
    "findUserByEmail": ()=>findUserByEmail
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$proxy$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-proxy.js [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$action$2d$encryption$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/app-render/action-encryption.js [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/bcryptjs/index.js [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/headers.js [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/zod/lib/index.mjs [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/prisma.ts [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
;
const schemaFormData = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$rsc$5d$__$28$ecmascript$29$__["z"].object({
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$rsc$5d$__$28$ecmascript$29$__["z"].string().email(),
    password: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$rsc$5d$__$28$ecmascript$29$__["z"].string()
});
async function findUserByEmail(formData) {
    const { email, password } = schemaFormData.parse({
        email: formData.get('email'),
        password: formData.get('password')
    });
    const passwordHash = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["hash"](password, 6);
    const user = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$rsc$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
        where: {
            email,
            password_hash: passwordHash
        }
    });
    if (!user) {
        throw new Error('Usuário não encontrado.');
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["cookies"]().set('@coffee-delivery:userId', user.id, {
        path: '/',
        secure: true,
        httpOnly: true
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["redirect"]('/');
}
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"]([
    findUserByEmail
]);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$proxy$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["createActionProxy"]("84fe930077562eb5f5e301eb6e8ebe5bc7da85e3", null, findUserByEmail);

})()),
"[project]/src/app/login/page.tsx [rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

/* __next_internal_action_entry_do_not_use__ {"92f085680a7f550232e6cc402ea1d6b1cb29f4df":"$$ACTION_0"} */ __turbopack_esm__({
    "$$ACTION_0": ()=>$$ACTION_0,
    "default": ()=>Register
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$proxy$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-proxy.js [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$action$2d$encryption$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/app-render/action-encryption.js [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$findUserByEmail$2e$ts__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/api/findUserByEmail.ts [rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
function Register() {
    async function handleLoginUser(...args) {
        return $$ACTION_0.apply(null, (handleLoginUser.$$bound || []).concat(args));
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$proxy$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["createActionProxy"]("92f085680a7f550232e6cc402ea1d6b1cb29f4df", null, handleLoginUser, $$ACTION_0);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "min-h-screen flex items-center justify-center",
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "bg-white p-8 rounded shadow-md w-96 border border-gray-300",
            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("form", {
                action: handleLoginUser,
                className: "flex flex-col items-center",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("h1", {
                        className: "text-2xl font-bold mb-4",
                        children: "Login"
                    }, void 0, false, {
                        fileName: "<[project]/src/app/login/page.tsx>",
                        lineNumber: 12,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "mb-4 w-full",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                htmlFor: "email",
                                className: "block text-sm font-medium text-gray-600",
                                children: "E-mail"
                            }, void 0, false, {
                                fileName: "<[project]/src/app/login/page.tsx>",
                                lineNumber: 15,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                type: "email",
                                name: "email",
                                className: "mt-1 p-2 w-full border rounded-md"
                            }, void 0, false, {
                                fileName: "<[project]/src/app/login/page.tsx>",
                                lineNumber: 21,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/app/login/page.tsx>",
                        lineNumber: 14,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "mb-4 w-full",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                htmlFor: "password",
                                className: "block text-sm font-medium text-gray-600",
                                children: "Senha"
                            }, void 0, false, {
                                fileName: "<[project]/src/app/login/page.tsx>",
                                lineNumber: 28,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                type: "password",
                                id: "password",
                                name: "password",
                                className: "mt-1 p-2 w-full border rounded-md"
                            }, void 0, false, {
                                fileName: "<[project]/src/app/login/page.tsx>",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/app/login/page.tsx>",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                        type: "submit",
                        className: "text-base-text font-baloo2 font-semibold py-2 px-8 rounded-md bg-yellow hover:text-white",
                        children: "Enviar"
                    }, void 0, false, {
                        fileName: "<[project]/src/app/login/page.tsx>",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/app/login/page.tsx>",
                lineNumber: 11,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "<[project]/src/app/login/page.tsx>",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/app/login/page.tsx>",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
async function $$ACTION_0(formData) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$findUserByEmail$2e$ts__$5b$rsc$5d$__$28$ecmascript$29$__["findUserByEmail"](formData);
}

})()),
"[project]/src/app/api/getProductFromCart.ts [rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

/* __next_internal_action_entry_do_not_use__ {"7b63ff2c438fc5f53614938d1a5d2ea05709804a":"getProductFromCart"} */ __turbopack_esm__({
    "getProductFromCart": ()=>getProductFromCart
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$proxy$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-proxy.js [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$action$2d$encryption$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/app-render/action-encryption.js [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/headers.js [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/prisma.ts [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
async function getProductFromCart() {
    const userId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["cookies"]().get('@coffee-delivery:userId');
    const products = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$rsc$5d$__$28$ecmascript$29$__["prisma"].cart.findMany({
        where: {
            user_id: userId?.value
        }
    });
    if (!products) {
        throw new Error('Não foi possivel achar nenhum produto desse usuário.');
    }
    return products;
}
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"]([
    getProductFromCart
]);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$proxy$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["createActionProxy"]("7b63ff2c438fc5f53614938d1a5d2ea05709804a", null, getProductFromCart);

})()),
"[project]/src/app/api/countProductToCart.ts [rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

/* __next_internal_action_entry_do_not_use__ {"71516f033d182a6156e3dbba0c7e74cb235a2d79":"countProductToCart"} */ __turbopack_esm__({
    "countProductToCart": ()=>countProductToCart
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$proxy$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-proxy.js [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$action$2d$encryption$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/app-render/action-encryption.js [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/cache.js [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/prisma.ts [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
async function countProductToCart(userId) {
    // const count =
    //   await prisma.$queryRaw`SELECT SUM(amount) FROM cart WHERE user_id = ${userId}`
    const count = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$rsc$5d$__$28$ecmascript$29$__["prisma"].cart.count({
        where: {
            user_id: userId
        }
    });
    if (!count) {
        return 0;
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["revalidatePath"]('/checkout');
    return count;
}
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"]([
    countProductToCart
]);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$proxy$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["createActionProxy"]("71516f033d182a6156e3dbba0c7e74cb235a2d79", null, countProductToCart);

})()),
"[project]/src/app/components/ui/drawer.tsx (client proxy)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "$$typeof": ()=>$$typeof,
    "__esModule": ()=>__esModule,
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$module$2d$proxy$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js [rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const proxy = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$module$2d$proxy$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["createProxy"]("[project]/src/app/components/ui/drawer.tsx");
// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
;
const __TURBOPACK__default__export__ = proxy;

})()),
"[project]/src/app/components/ui/drawer.tsx [rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$drawer$2e$tsx__$28$client__proxy$29$__ = __turbopack_import__("[project]/src/app/components/ui/drawer.tsx (client proxy)");
"__TURBOPACK__ecmascript__hoisting__location__";
"TURBOPACK { transition: next-ecmascript-client-reference }";
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$drawer$2e$tsx__$28$client__proxy$29$__["default"]);

})()),
"[project]/src/lib/utils.ts [rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "cn": ()=>cn
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/clsx/dist/clsx.mjs [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function cn(...inputs) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$rsc$5d$__$28$ecmascript$29$__["twMerge"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$rsc$5d$__$28$ecmascript$29$__["clsx"](inputs));
}

})()),
"[project]/src/app/components/ui/button.tsx [rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Button": ()=>Button,
    "buttonVariants": ()=>buttonVariants
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react.js [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/class-variance-authority/dist/index.mjs [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/utils.ts [rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
const buttonVariants = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$rsc$5d$__$28$ecmascript$29$__["cva"]("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__.forwardRef(({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$rsc$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"](Comp, {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$rsc$5d$__$28$ecmascript$29$__["cn"](buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "<[project]/src/app/components/ui/button.tsx>",
        lineNumber: 46,
        columnNumber: 7
    }, this);
});
Button.displayName = "Button";
;

})()),
"[project]/src/app/api/getTotalPriceToCart.ts [rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

/* __next_internal_action_entry_do_not_use__ {"0a6ec322687d9e393c43a6d84e01b269b85d3c71":"getTotalPriceToCart"} */ __turbopack_esm__({
    "getTotalPriceToCart": ()=>getTotalPriceToCart
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$proxy$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-proxy.js [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$action$2d$encryption$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/app-render/action-encryption.js [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/headers.js [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/prisma.ts [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
async function getTotalPriceToCart() {
    const userId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["cookies"]().get('@coffee-delivery:userId');
    let totalPrice = 0;
    const totalItems = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$rsc$5d$__$28$ecmascript$29$__["prisma"].cart.findMany({
        where: {
            user_id: userId?.value
        },
        select: {
            amount: true,
            original_price: true
        }
    });
    // eslint-disable-next-line array-callback-return
    totalItems.map((item)=>{
        totalPrice += item.original_price * item.amount;
    });
    return totalPrice;
}
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"]([
    getTotalPriceToCart
]);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$proxy$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["createActionProxy"]("0a6ec322687d9e393c43a6d84e01b269b85d3c71", null, getTotalPriceToCart);

})()),
"[project]/src/app/components/totalPrice.tsx [rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "TotalPrice": ()=>TotalPrice
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$getTotalPriceToCart$2e$ts__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/api/getTotalPriceToCart.ts [rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
async function TotalPrice() {
    const totalPrice = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$getTotalPriceToCart$2e$ts__$5b$rsc$5d$__$28$ecmascript$29$__["getTotalPriceToCart"]();
    const priceFormatted = new Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL'
    }).format(totalPrice + 3.5);
    const totalPriceFormatted = new Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL'
    }).format(totalPrice);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "mt-6",
            children: [
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "flex justify-between",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                            children: "Total de itens"
                        }, void 0, false, {
                            fileName: "<[project]/src/app/components/totalPrice.tsx>",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                            children: totalPriceFormatted
                        }, void 0, false, {
                            fileName: "<[project]/src/app/components/totalPrice.tsx>",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/app/components/totalPrice.tsx>",
                    lineNumber: 18,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "flex justify-between",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                            children: "Entrega"
                        }, void 0, false, {
                            fileName: "<[project]/src/app/components/totalPrice.tsx>",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                            children: "R$ 3,50"
                        }, void 0, false, {
                            fileName: "<[project]/src/app/components/totalPrice.tsx>",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/app/components/totalPrice.tsx>",
                    lineNumber: 23,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "flex justify-between text-xl font-roboto font-bold leading-[130%] text-base-subtitle",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                            children: "Total"
                        }, void 0, false, {
                            fileName: "<[project]/src/app/components/totalPrice.tsx>",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                            children: priceFormatted
                        }, void 0, false, {
                            fileName: "<[project]/src/app/components/totalPrice.tsx>",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/app/components/totalPrice.tsx>",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/src/app/components/totalPrice.tsx>",
            lineNumber: 17,
            columnNumber: 7
        }, this)
    }, void 0, false);
}

})()),
"[project]/src/app/components/icons/emojiSad.tsx [rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "EmojiSad": ()=>EmojiSad
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function EmojiSad() {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "42",
        height: "42",
        fill: "#C47F17",
        viewBox: "0 0 256 256",
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
            d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM80,108a12,12,0,1,1,12,12A12,12,0,0,1,80,108Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,176,108Zm-1.08,64a8,8,0,1,1-13.84,8c-7.47-12.91-19.21-20-33.08-20s-25.61,7.1-33.08,20a8,8,0,1,1-13.84-8c10.29-17.79,27.39-28,46.92-28S164.63,154.2,174.92,172Z"
        }, void 0, false, {
            fileName: "<[project]/src/app/components/icons/emojiSad.tsx>",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/app/components/icons/emojiSad.tsx>",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}

})()),
"[project]/src/app/components/icons/cart.tsx [rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Cart": ()=>Cart
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function Cart({ color }) {
    switch(color){
        case 'yellow':
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 22 22",
                fill: "none",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                    d: "M19.2414 5.62031L18.193 11.3695C18.1065 11.8445 17.8561 12.274 17.4855 12.5834C17.1149 12.8927 16.6476 13.0623 16.1648 13.0625H6.19609L6.57422 15.125H15.8125C16.2204 15.125 16.6192 15.246 16.9584 15.4726C17.2975 15.6992 17.5619 16.0213 17.718 16.3982C17.8741 16.7751 17.915 17.1898 17.8354 17.5899C17.7558 17.99 17.5594 18.3575 17.2709 18.6459C16.9825 18.9344 16.615 19.1308 16.2149 19.2104C15.8148 19.2899 15.4001 19.2491 15.0232 19.093C14.6463 18.9369 14.3242 18.6725 14.0976 18.3334C13.871 17.9942 13.75 17.5954 13.75 17.1875C13.7501 16.9531 13.7908 16.7205 13.8703 16.5H8.81719C8.89672 16.7205 8.93743 16.9531 8.9375 17.1875C8.93812 17.5203 8.85821 17.8482 8.7046 18.1434C8.55099 18.4386 8.32823 18.6923 8.05534 18.8827C7.78245 19.0732 7.46753 19.1947 7.13746 19.2371C6.8074 19.2794 6.47199 19.2413 6.15986 19.1259C5.84774 19.0105 5.56816 18.8213 5.34501 18.5745C5.12185 18.3276 4.96174 18.0304 4.87833 17.7083C4.79493 17.3861 4.79071 17.0486 4.86605 16.7244C4.94138 16.4003 5.09402 16.0992 5.31094 15.8469L2.93047 2.75H1.375C1.19266 2.75 1.0178 2.67757 0.888864 2.54864C0.759933 2.4197 0.6875 2.24484 0.6875 2.0625C0.6875 1.88016 0.759933 1.7053 0.888864 1.57636C1.0178 1.44743 1.19266 1.375 1.375 1.375H2.93047C3.25139 1.3757 3.56196 1.48864 3.80838 1.69424C4.05479 1.89985 4.22152 2.18517 4.27969 2.50078L4.70078 4.8125H18.5625C18.6629 4.81271 18.7619 4.83517 18.8526 4.87826C18.9432 4.92136 19.0232 4.98401 19.0867 5.06172C19.1532 5.13699 19.2017 5.2264 19.2285 5.32318C19.2553 5.41996 19.2597 5.52157 19.2414 5.62031Z",
                    fill: "#C47F17"
                }, void 0, false, {
                    fileName: "<[project]/src/app/components/icons/cart.tsx>",
                    lineNumber: 16,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/app/components/icons/cart.tsx>",
                lineNumber: 9,
                columnNumber: 9
            }, this);
        case 'white':
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "none",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                    d: "M13.9938 4.0875L13.2313 8.26875C13.1683 8.61415 12.9863 8.92655 12.7168 9.15153C12.4472 9.37652 12.1073 9.49983 11.7563 9.5H4.50625L4.78125 11H11.5C11.7967 11 12.0867 11.088 12.3334 11.2528C12.58 11.4176 12.7723 11.6519 12.8858 11.926C12.9994 12.2001 13.0291 12.5017 12.9712 12.7926C12.9133 13.0836 12.7704 13.3509 12.5607 13.5607C12.3509 13.7704 12.0836 13.9133 11.7926 13.9712C11.5017 14.0291 11.2001 13.9994 10.926 13.8858C10.6519 13.7723 10.4176 13.58 10.2528 13.3334C10.088 13.0867 10 12.7967 10 12.5C10.0001 12.3295 10.0297 12.1604 10.0875 12H6.4125C6.47034 12.1604 6.49995 12.3295 6.5 12.5C6.50045 12.742 6.44234 12.9805 6.33062 13.1952C6.2189 13.4099 6.05689 13.5944 5.85843 13.7329C5.65996 13.8714 5.43093 13.9598 5.19088 13.9906C4.95084 14.0214 4.7069 13.9937 4.4799 13.9097C4.2529 13.8258 4.04957 13.6882 3.88728 13.5087C3.72498 13.3292 3.60854 13.113 3.54788 12.8787C3.48722 12.6445 3.48416 12.399 3.53894 12.1632C3.59373 11.9275 3.70474 11.7085 3.8625 11.525L2.13125 2H1C0.867392 2 0.740215 1.94732 0.646447 1.85355C0.552678 1.75979 0.5 1.63261 0.5 1.5C0.5 1.36739 0.552678 1.24021 0.646447 1.14645C0.740215 1.05268 0.867392 1 1 1H2.13125C2.36465 1.00051 2.59052 1.08265 2.76973 1.23218C2.94894 1.38171 3.0702 1.58922 3.1125 1.81875L3.41875 3.5H13.5C13.573 3.50015 13.645 3.51649 13.711 3.54783C13.7769 3.57917 13.8351 3.62474 13.8813 3.68125C13.9296 3.73599 13.9649 3.80102 13.9843 3.8714C14.0038 3.94179 14.0071 4.01569 13.9938 4.0875Z",
                    fill: "#FAFAFA"
                }, void 0, false, {
                    fileName: "<[project]/src/app/components/icons/cart.tsx>",
                    lineNumber: 32,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/app/components/icons/cart.tsx>",
                lineNumber: 25,
                columnNumber: 9
            }, this);
    }
}

})()),
"[project]/src/app/components/cartCardCoffee.tsx (client proxy)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "$$typeof": ()=>$$typeof,
    "__esModule": ()=>__esModule,
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$module$2d$proxy$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js [rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const proxy = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$module$2d$proxy$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["createProxy"]("[project]/src/app/components/cartCardCoffee.tsx");
// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
;
const __TURBOPACK__default__export__ = proxy;

})()),
"[project]/src/app/components/cartCardCoffee.tsx [rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$cartCardCoffee$2e$tsx__$28$client__proxy$29$__ = __turbopack_import__("[project]/src/app/components/cartCardCoffee.tsx (client proxy)");
"__TURBOPACK__ecmascript__hoisting__location__";
"TURBOPACK { transition: next-ecmascript-client-reference }";
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$cartCardCoffee$2e$tsx__$28$client__proxy$29$__["default"]);

})()),
"[project]/src/app/components/buttonReturnHomePage.tsx (client proxy)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "$$typeof": ()=>$$typeof,
    "__esModule": ()=>__esModule,
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$module$2d$proxy$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js [rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const proxy = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$module$2d$proxy$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["createProxy"]("[project]/src/app/components/buttonReturnHomePage.tsx");
// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
;
const __TURBOPACK__default__export__ = proxy;

})()),
"[project]/src/app/components/buttonReturnHomePage.tsx [rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$buttonReturnHomePage$2e$tsx__$28$client__proxy$29$__ = __turbopack_import__("[project]/src/app/components/buttonReturnHomePage.tsx (client proxy)");
"__TURBOPACK__ecmascript__hoisting__location__";
"TURBOPACK { transition: next-ecmascript-client-reference }";
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$buttonReturnHomePage$2e$tsx__$28$client__proxy$29$__["default"]);

})()),
"[project]/src/app/components/buttonDeleteProducts.tsx (client proxy)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "$$typeof": ()=>$$typeof,
    "__esModule": ()=>__esModule,
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$module$2d$proxy$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js [rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const proxy = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$module$2d$proxy$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["createProxy"]("[project]/src/app/components/buttonDeleteProducts.tsx");
// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
;
const __TURBOPACK__default__export__ = proxy;

})()),
"[project]/src/app/components/buttonDeleteProducts.tsx [rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$buttonDeleteProducts$2e$tsx__$28$client__proxy$29$__ = __turbopack_import__("[project]/src/app/components/buttonDeleteProducts.tsx (client proxy)");
"__TURBOPACK__ecmascript__hoisting__location__";
"TURBOPACK { transition: next-ecmascript-client-reference }";
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$buttonDeleteProducts$2e$tsx__$28$client__proxy$29$__["default"]);

})()),
"[project]/src/lib/stripe.ts [rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "stripe": ()=>stripe
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stripe$2f$esm$2f$stripe$2e$esm$2e$node$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/stripe/esm/stripe.esm.node.js [rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
const stripe = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stripe$2f$esm$2f$stripe$2e$esm$2e$node$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["default"](STRIPE_SECRET_KEY, {
    apiVersion: '2023-10-16',
    appInfo: {
        name: 'Coffee Delivery'
    }
});

})()),
"[project]/src/app/api/orderCompleted.ts [rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

/* __next_internal_action_entry_do_not_use__ {"60baa89b7545a46f7729425a9d53cd491e5f4bff":"orderCompleted"} */ __turbopack_esm__({
    "orderCompleted": ()=>orderCompleted
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$proxy$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-proxy.js [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$action$2d$encryption$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/app-render/action-encryption.js [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/headers.js [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/prisma.ts [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stripe$2e$ts__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/stripe.ts [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
async function orderCompleted() {
    const userId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["cookies"]().get('@coffee-delivery:userId');
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$rsc$5d$__$28$ecmascript$29$__["prisma"].cart.updateMany({
        where: {
            user_id: userId?.value
        },
        data: {
            status: 'success'
        }
    });
    const products = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$rsc$5d$__$28$ecmascript$29$__["prisma"].cart.findMany({
        where: {
            user_id: userId?.value
        }
    });
    const productsByStripe = await Promise.all(products.map(async (product)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stripe$2e$ts__$5b$rsc$5d$__$28$ecmascript$29$__["stripe"].prices.list({
            product: product.product_id
        });
        return response;
    }));
    const lineItems = [];
    for(let i = 0; i < productsByStripe.length; i++){
        lineItems.push({
            price: productsByStripe[i].data[i].id,
            quantity: products[i].amount
        });
    }
    const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
    const cancelUrl = `${process.env.NEXT_URL}/`;
    const session = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stripe$2e$ts__$5b$rsc$5d$__$28$ecmascript$29$__["stripe"].checkout.sessions.create({
        success_url: successUrl,
        cancel_url: cancelUrl,
        line_items: lineItems,
        mode: 'payment'
    });
    if (session.url) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["redirect"](session.url);
    }
}
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"]([
    orderCompleted
]);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$proxy$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["createActionProxy"]("60baa89b7545a46f7729425a9d53cd491e5f4bff", null, orderCompleted);

})()),
"[project]/src/app/components/cart.tsx [rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

/* __next_internal_action_entry_do_not_use__ {"694d5591a8cb9a8fdf625e37c5b98e96a8a3f852":"$$ACTION_0"} */ __turbopack_esm__({
    "$$ACTION_0": ()=>$$ACTION_0,
    "CallCart": ()=>CallCart
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$proxy$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-proxy.js [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$action$2d$encryption$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/app-render/action-encryption.js [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$getProductFromCart$2e$ts__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/api/getProductFromCart.ts [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$orderCompleted$2e$ts__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/api/orderCompleted.ts [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$buttonDeleteProducts$2e$tsx__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/buttonDeleteProducts.tsx [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$buttonReturnHomePage$2e$tsx__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/buttonReturnHomePage.tsx [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$cartCardCoffee$2e$tsx__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/cartCardCoffee.tsx [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$icons$2f$cart$2e$tsx__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/icons/cart.tsx [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$icons$2f$emojiSad$2e$tsx__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/icons/emojiSad.tsx [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$totalPrice$2e$tsx__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/totalPrice.tsx [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/ui/button.tsx [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$drawer$2e$tsx__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/ui/drawer.tsx [rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
;
;
;
;
;
;
;
async function CallCart({ amountProductInCart }) {
    const products = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$getProductFromCart$2e$ts__$5b$rsc$5d$__$28$ecmascript$29$__["getProductFromCart"]();
    async function handleOrderCompleted(...args) {
        return $$ACTION_0.apply(null, (handleOrderCompleted.$$bound || []).concat(args));
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$proxy$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["createActionProxy"]("694d5591a8cb9a8fdf625e37c5b98e96a8a3f852", null, handleOrderCompleted, $$ACTION_0);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$drawer$2e$tsx__$5b$rsc$5d$__$28$ecmascript$29$__["Drawer"], {
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$drawer$2e$tsx__$5b$rsc$5d$__$28$ecmascript$29$__["DrawerTrigger"], {
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "flex items-center p-2 bg-yellow-light rounded-[0.375rem]",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "bg-yellow-dark absolute rounded-full p-1 px-2 -mt-10 ml-4 flex justify-center items-center",
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                className: "font-roboto text-xs font-bold leading-[130%] text-white",
                                children: amountProductInCart || 0
                            }, void 0, false, {
                                fileName: "<[project]/src/app/components/cart.tsx>",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/src/app/components/cart.tsx>",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$icons$2f$cart$2e$tsx__$5b$rsc$5d$__$28$ecmascript$29$__["Cart"], {
                            color: "yellow"
                        }, void 0, false, {
                            fileName: "<[project]/src/app/components/cart.tsx>",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/app/components/cart.tsx>",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/app/components/cart.tsx>",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$drawer$2e$tsx__$5b$rsc$5d$__$28$ecmascript$29$__["DrawerContent"], {
                className: "ml-auto w-[30%] h-screen px-10",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$drawer$2e$tsx__$5b$rsc$5d$__$28$ecmascript$29$__["DrawerHeader"], {
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$drawer$2e$tsx__$5b$rsc$5d$__$28$ecmascript$29$__["DrawerTitle"], {
                            className: "text-center",
                            children: "Carrinho"
                        }, void 0, false, {
                            fileName: "<[project]/src/app/components/cart.tsx>",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/src/app/components/cart.tsx>",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "flex flex-col justify-between p-10 bg-base-card rounded-tr-md rounded-bl-md mt-[0.94rem] h-full",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "space-y-6",
                                children: [
                                    products.length === 0 ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "w-full p-10 bg-yellow-light flex flex-col items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("h1", {
                                                className: "font-bold font-baloo2 text-yellow-dark",
                                                children: "Não possui nenhum produto no carrinho."
                                            }, void 0, false, {
                                                fileName: "<[project]/src/app/components/cart.tsx>",
                                                lineNumber: 53,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$icons$2f$emojiSad$2e$tsx__$5b$rsc$5d$__$28$ecmascript$29$__["EmojiSad"], {}, void 0, false, {
                                                fileName: "<[project]/src/app/components/cart.tsx>",
                                                lineNumber: 56,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/src/app/components/cart.tsx>",
                                        lineNumber: 52,
                                        columnNumber: 15
                                    }, this) : null,
                                    products.map((product)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$cartCardCoffee$2e$tsx__$5b$rsc$5d$__$28$ecmascript$29$__["CartCardCoffee"], {
                                            id: product.id,
                                            imageUrl: product.imageUrl,
                                            amountCoffee: product.amount,
                                            name: product.name,
                                            price: product.original_price
                                        }, product.id, false, {
                                            fileName: "<[project]/src/app/components/cart.tsx>",
                                            lineNumber: 60,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/app/components/cart.tsx>",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this),
                            products.length === 0 ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$totalPrice$2e$tsx__$5b$rsc$5d$__$28$ecmascript$29$__["TotalPrice"], {}, void 0, false, {
                                    fileName: "<[project]/src/app/components/cart.tsx>",
                                    lineNumber: 75,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/app/components/cart.tsx>",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$drawer$2e$tsx__$5b$rsc$5d$__$28$ecmascript$29$__["DrawerFooter"], {
                        children: products.length === 0 ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$buttonReturnHomePage$2e$tsx__$5b$rsc$5d$__$28$ecmascript$29$__["ButtonReturnHomePage"], {}, void 0, false, {
                                    fileName: "<[project]/src/app/components/cart.tsx>",
                                    lineNumber: 82,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$buttonDeleteProducts$2e$tsx__$5b$rsc$5d$__$28$ecmascript$29$__["ButtonDeleteProducts"], {
                                    hidden: true
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/components/cart.tsx>",
                                    lineNumber: 83,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$rsc$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: handleOrderCompleted,
                                    variant: "destructive",
                                    className: "w-full rounded-md text-white font-roboto font-bold text-sm leading-[160%] uppercase bg-yellow py-3 px-2 mt-6 hover:bg-yellow-dark hover:transition-all",
                                    children: "Confirmar pedido"
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/components/cart.tsx>",
                                    lineNumber: 87,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$buttonDeleteProducts$2e$tsx__$5b$rsc$5d$__$28$ecmascript$29$__["ButtonDeleteProducts"], {
                                    hidden: false
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/components/cart.tsx>",
                                    lineNumber: 94,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "<[project]/src/app/components/cart.tsx>",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/app/components/cart.tsx>",
                lineNumber: 45,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/app/components/cart.tsx>",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
async function $$ACTION_0() {
    const cheackoutUrl = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$orderCompleted$2e$ts__$5b$rsc$5d$__$28$ecmascript$29$__["orderCompleted"]();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    window.location.href = cheackoutUrl;
}

})()),
"[project]/src/app/api/deleteProductFromCart.ts [rsc] (ecmascript, action, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

/* __next_internal_action_entry_do_not_use__ {"5cad7c2f7b65b8db16a602af5a226272ceea95f2":"deleteProductFromCart"} */ __turbopack_esm__({
    "deleteProductFromCart": ()=>deleteProductFromCart
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$proxy$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-proxy.js [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$action$2d$encryption$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/app-render/action-encryption.js [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/cache.js [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/headers.js [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/prisma.ts [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
async function deleteProductFromCart(id) {
    const userId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["cookies"]().get('@coffee-delivery:userId');
    const product = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$rsc$5d$__$28$ecmascript$29$__["prisma"].cart.findFirstOrThrow({
        where: {
            id,
            user_id: userId?.value
        }
    });
    if (!product) {
        throw new Error('Não foi possivel indentificar o produto no carrinho.');
    } else {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$rsc$5d$__$28$ecmascript$29$__["prisma"].cart.delete({
            where: {
                id: product.id
            }
        });
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["revalidatePath"]('/checkout');
}
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"]([
    deleteProductFromCart
]);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$proxy$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["createActionProxy"]("5cad7c2f7b65b8db16a602af5a226272ceea95f2", null, deleteProductFromCart);

})()),
"[project]/src/app/api/deleteProductsToCart.ts [rsc] (ecmascript, action, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

/* __next_internal_action_entry_do_not_use__ {"10ed764f9a2a28785699f0af7b6414952462e031":"deleteProductsToCart"} */ __turbopack_esm__({
    "deleteProductsToCart": ()=>deleteProductsToCart
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$proxy$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-proxy.js [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$action$2d$encryption$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/app-render/action-encryption.js [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/cache.js [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/headers.js [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/prisma.ts [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
async function deleteProductsToCart() {
    const userId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["cookies"]().get('@coffee-delivery:userId');
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$rsc$5d$__$28$ecmascript$29$__["prisma"].cart.deleteMany({
        where: {
            user_id: userId?.value
        }
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["revalidatePath"]('/');
}
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"]([
    deleteProductsToCart
]);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$proxy$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["createActionProxy"]("10ed764f9a2a28785699f0af7b6414952462e031", null, deleteProductsToCart);

})()),
"[node]/.next/server/app/login/page/actions.js/(ACTIONS_MODULE0)/[project]/src/app/api/getTotalPriceToCart.ts [rsc] (ecmascript)/(ACTIONS_MODULE1)/[project]/src/app/api/deleteProductsToCart.ts [rsc] (ecmascript, action, ecmascript)/(ACTIONS_MODULE2)/[project]/src/app/api/deleteProductFromCart.ts [rsc] (ecmascript, action, ecmascript)/(ACTIONS_MODULE3)/[project]/src/app/api/orderCompleted.ts [rsc] (ecmascript)/(ACTIONS_MODULE4)/[project]/src/app/components/cart.tsx [rsc] (ecmascript)/(ACTIONS_MODULE5)/[project]/src/app/api/countProductToCart.ts [rsc] (ecmascript)/(ACTIONS_MODULE6)/[project]/src/app/api/getProductFromCart.ts [rsc] (ecmascript)/(ACTIONS_MODULE7)/[project]/src/app/api/findUserByEmail.ts [rsc] (ecmascript)/(ACTIONS_MODULE8)/[project]/src/app/login/page.tsx [rsc] (ecmascript)/(ACTIONS_MODULE9)/[project]/src/app/api/findUserById.ts [rsc] (ecmascript) (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

__turbopack_export_value__({
    '0a6ec322687d9e393c43a6d84e01b269b85d3c71': (...args)=>(0, __turbopack_require__("[project]/src/app/api/getTotalPriceToCart.ts [rsc] (ecmascript)")['getTotalPriceToCart'])(...args),
    '10ed764f9a2a28785699f0af7b6414952462e031': (...args)=>(0, __turbopack_require__("[project]/src/app/api/deleteProductsToCart.ts [rsc] (ecmascript, action, ecmascript)")['deleteProductsToCart'])(...args),
    '5cad7c2f7b65b8db16a602af5a226272ceea95f2': (...args)=>(0, __turbopack_require__("[project]/src/app/api/deleteProductFromCart.ts [rsc] (ecmascript, action, ecmascript)")['deleteProductFromCart'])(...args),
    '60baa89b7545a46f7729425a9d53cd491e5f4bff': (...args)=>(0, __turbopack_require__("[project]/src/app/api/orderCompleted.ts [rsc] (ecmascript)")['orderCompleted'])(...args),
    '694d5591a8cb9a8fdf625e37c5b98e96a8a3f852': (...args)=>(0, __turbopack_require__("[project]/src/app/components/cart.tsx [rsc] (ecmascript)")['$$ACTION_0'])(...args),
    '71516f033d182a6156e3dbba0c7e74cb235a2d79': (...args)=>(0, __turbopack_require__("[project]/src/app/api/countProductToCart.ts [rsc] (ecmascript)")['countProductToCart'])(...args),
    '7b63ff2c438fc5f53614938d1a5d2ea05709804a': (...args)=>(0, __turbopack_require__("[project]/src/app/api/getProductFromCart.ts [rsc] (ecmascript)")['getProductFromCart'])(...args),
    '84fe930077562eb5f5e301eb6e8ebe5bc7da85e3': (...args)=>(0, __turbopack_require__("[project]/src/app/api/findUserByEmail.ts [rsc] (ecmascript)")['findUserByEmail'])(...args),
    '92f085680a7f550232e6cc402ea1d6b1cb29f4df': (...args)=>(0, __turbopack_require__("[project]/src/app/login/page.tsx [rsc] (ecmascript)")['$$ACTION_0'])(...args),
    'e3a5b14fe08371d5ad9d70144425faa433ffa49c': (...args)=>(0, __turbopack_require__("[project]/src/app/api/findUserById.ts [rsc] (ecmascript)")['findUserById'])(...args)
});

}.call(this) }),
"[project]/src/app/components/icons/user.tsx [rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "User": ()=>User
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function User() {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        fill: "#000000",
        viewBox: "0 0 256 256",
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
            d: "M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"
        }, void 0, false, {
            fileName: "<[project]/src/app/components/icons/user.tsx>",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/app/components/icons/user.tsx>",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}

})()),
"[project]/src/app/components/icons/logo.tsx [rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Logo": ()=>Logo
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function Logo() {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "85",
        height: "40",
        viewBox: "0 0 85 40",
        fill: "none",
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                d: "M24.2175 4.10239C23.8932 3.60575 23.4194 3.59149 22.8795 3.57523C22.8183 3.57339 22.7563 3.57153 22.6936 3.56893C22.6458 3.56673 22.5931 3.56758 22.538 3.56846C22.319 3.57198 22.0629 3.57609 21.9339 3.39212C21.7843 3.17883 21.7985 2.76663 21.8102 2.42635C21.8139 2.31882 21.8173 2.21841 21.8153 2.1338C21.7943 1.34332 21.7504 0.503628 21.4453 0.22292C21.2152 0.0123098 20.5268 0.041487 19.892 0.0683954C19.6862 0.0771184 19.486 0.085603 19.3089 0.085603H5.79596C5.52389 0.085603 5.23869 0.0634489 4.95847 0.0416813C4.41245 -0.000733803 3.88533 -0.0416812 3.511 0.085603C2.96775 0.271231 2.93096 1.24667 2.89633 2.16519L2.89446 2.21461C2.86538 2.97288 2.67746 3.55799 2.05465 3.49906C1.33029 3.43161 0.609497 3.41035 0.281987 4.06594C-0.10481 4.84161 -0.0250374 5.65358 0.117847 7.10792C0.138258 7.31567 0.159956 7.53652 0.181766 7.77225H24.4264C24.4403 7.59995 24.455 7.42986 24.4696 7.26253C24.5831 5.95406 24.682 4.81402 24.2175 4.10239Z",
                fill: "#8047F8"
            }, void 0, false, {
                fileName: "<[project]/src/app/components/icons/logo.tsx>",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M2.06987 9.21467C2.44852 14.3395 2.82304 19.4701 3.19757 24.6009L3.1978 24.604C3.40115 27.3898 3.60451 30.1756 3.80853 32.9606H4.58212C4.63483 33.3965 4.69515 33.9347 4.75874 34.5021C4.88783 35.6539 5.03044 36.9264 5.15034 37.7083H5.2359C6.02387 37.42 11.4712 35.0916 11.4736 25.8218C11.4726 25.7954 11.4735 25.7689 11.4762 25.7427H10.1304C10.0653 25.7421 10.0021 25.7203 9.9507 25.6808C9.89927 25.6413 9.86241 25.5861 9.84577 25.5238C9.71463 25.1999 9.60888 24.8664 9.52948 24.5264C8.73777 24.9736 8.10906 25.6564 7.73296 26.4775C7.37594 25.6365 7.32921 24.6983 7.60093 23.8267C7.87266 22.9551 8.44556 22.2057 9.21952 21.7093C9.22949 19.0043 10.2423 16.3968 12.0661 14.3804L12.0946 14.3553C12.1476 14.3095 12.2155 14.284 12.2859 14.2834C12.3266 14.2838 12.3668 14.2925 12.4039 14.309C12.4415 14.3257 12.4751 14.35 12.5026 14.3804C14.3478 16.3996 15.3552 19.0321 15.3239 21.7531C16.1123 22.2356 16.6969 22.9845 16.9691 23.8608C17.2413 24.7371 17.1827 25.6813 16.8042 26.5181C16.4301 25.6957 15.8008 25.0123 15.0076 24.5671C14.9592 24.8966 14.8699 25.219 14.7419 25.527C14.6977 25.6583 14.6091 25.7427 14.5205 25.7427H13.0853C13.0876 25.7584 13.0892 25.7742 13.0901 25.7901L13.0907 25.7937V25.8014C13.0912 25.815 13.0912 25.8287 13.0907 25.8424C13.1104 35.3783 18.902 37.5428 19.3902 37.7083H19.5572C19.5998 36.9572 19.7386 35.9208 19.8739 34.9104C19.9671 34.2142 20.0587 33.5302 20.116 32.9606H20.8985C21.149 29.4527 21.4066 25.9546 21.6642 22.4564L21.6644 22.4545L21.6645 22.4535C21.994 17.9789 22.3235 13.5042 22.6381 9.0087H2.11998C2.06092 9.02024 2.06495 9.11685 2.06987 9.21467ZM12.2859 14.2834L12.2844 14.2834H12.2875L12.2859 14.2834Z",
                fill: "#8047F8"
            }, void 0, false, {
                fileName: "<[project]/src/app/components/icons/logo.tsx>",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                d: "M31.3088 5.69821C31.3088 4.43316 31.7446 3.45274 32.6162 2.75696C33.5037 2.04537 34.8349 1.68958 36.6099 1.68958C37.7827 1.68958 38.7811 1.80027 39.6052 2.02165V5.29498C38.7177 5.02615 37.8381 4.89174 36.9665 4.89174C36.1107 4.89174 35.556 4.99453 35.3025 5.2001C35.0489 5.38985 34.9221 5.67449 34.9221 6.05401V14.0238C34.9221 14.7829 35.5164 15.1624 36.705 15.1624C37.9094 15.1624 38.8999 15.0438 39.6765 14.8066V18.0088C38.8207 18.246 37.7827 18.3646 36.5624 18.3646C34.7874 18.3646 33.4641 18.0167 32.5925 17.3209C31.7367 16.6251 31.3088 15.6447 31.3088 14.3796V5.69821Z",
                fill: "#403937"
            }, void 0, false, {
                fileName: "<[project]/src/app/components/icons/logo.tsx>",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                d: "M46.6205 7.95159C46.6205 7.35069 46.2877 7.05024 45.6221 7.05024C44.9564 7.05024 44.6236 7.35069 44.6236 7.95159V14.5457C44.6236 15.1466 44.9564 15.447 45.6221 15.447C46.2877 15.447 46.6205 15.1466 46.6205 14.5457V7.95159ZM41.1054 7.83299C41.1054 6.63119 41.4778 5.69821 42.2227 5.03406C42.9834 4.35409 44.1165 4.01411 45.6221 4.01411C47.1276 4.01411 48.2528 4.35409 48.9977 5.03406C49.7584 5.69821 50.1387 6.63119 50.1387 7.83299V14.6643C50.1387 15.8661 49.7584 16.807 48.9977 17.4869C48.2528 18.1511 47.1276 18.4832 45.6221 18.4832C44.1165 18.4832 42.9834 18.1511 42.2227 17.4869C41.4778 16.807 41.1054 15.8661 41.1054 14.6643V7.83299Z",
                fill: "#403937"
            }, void 0, false, {
                fileName: "<[project]/src/app/components/icons/logo.tsx>",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                d: "M52.4492 4.08527C52.4492 1.41284 53.8597 0.0766322 56.6806 0.0766322C57.0451 0.0766322 57.4809 0.116165 57.9881 0.195231V2.94672C57.7345 2.9151 57.4968 2.89928 57.2749 2.89928C56.4667 2.89928 56.0625 3.2788 56.0625 4.03783V4.25131H57.9881V7.05024H56.0625V18.246H52.4492V7.05024H51.0942V4.25131H52.4492V4.08527Z",
                fill: "#403937"
            }, void 0, false, {
                fileName: "<[project]/src/app/components/icons/logo.tsx>",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                d: "M59.4601 4.08527C59.4601 1.41284 60.8705 0.0766322 63.6915 0.0766322C64.056 0.0766322 64.4918 0.116165 64.9989 0.195231V2.94672C64.7454 2.9151 64.5076 2.89928 64.2858 2.89928C63.4775 2.89928 63.0734 3.2788 63.0734 4.03783V4.25131H64.9989V7.05024H63.0734V18.246H59.4601V7.05024H58.1051V4.25131H59.4601V4.08527Z",
                fill: "#403937"
            }, void 0, false, {
                fileName: "<[project]/src/app/components/icons/logo.tsx>",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                d: "M65.8291 14.261V7.83299C65.8291 6.63119 66.2015 5.69821 66.9464 5.03406C67.6912 4.35409 68.8164 4.01411 70.322 4.01411C73.2221 4.01411 74.6722 5.28707 74.6722 7.83299V12.6481H69.276V13.9764C69.276 14.4508 69.4028 14.7908 69.6563 14.9964C69.9258 15.1861 70.5042 15.281 71.3917 15.281C72.295 15.281 73.2776 15.1229 74.3394 14.8066V17.9376C73.2301 18.2381 72.0415 18.3883 70.7736 18.3883C67.4773 18.3883 65.8291 17.0125 65.8291 14.261ZM69.276 9.92033H71.3679V7.88043C71.3679 7.27953 71.0193 6.97908 70.322 6.97908C69.6247 6.97908 69.276 7.27953 69.276 7.88043V9.92033Z",
                fill: "#403937"
            }, void 0, false, {
                fileName: "<[project]/src/app/components/icons/logo.tsx>",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                d: "M76.09 14.261V7.83299C76.09 6.63119 76.4624 5.69821 77.2073 5.03406C77.9521 4.35409 79.0773 4.01411 80.5829 4.01411C83.483 4.01411 84.9331 5.28707 84.9331 7.83299V12.6481H79.5369V13.9764C79.5369 14.4508 79.6637 14.7908 79.9173 14.9964C80.1867 15.1861 80.7651 15.281 81.6526 15.281C82.5559 15.281 83.5385 15.1229 84.6003 14.8066V17.9376C83.491 18.2381 82.3024 18.3883 81.0345 18.3883C77.7382 18.3883 76.09 17.0125 76.09 14.261ZM79.5369 9.92033H81.6288V7.88043C81.6288 7.27953 81.2802 6.97908 80.5829 6.97908C79.8856 6.97908 79.5369 7.27953 79.5369 7.88043V9.92033Z",
                fill: "#403937"
            }, void 0, false, {
                fileName: "<[project]/src/app/components/icons/logo.tsx>",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                d: "M37.0305 26.9797C37.0305 25.8119 36.4128 25.2281 35.1775 25.2281H33.2075V35.874H35.1775C36.4128 35.874 37.0305 35.2771 37.0305 34.0834V26.9797ZM31.8226 24.0214H35.2555C36.2958 24.0214 37.0825 24.2874 37.6156 24.8194C38.1488 25.3513 38.4154 26.065 38.4154 26.9602V34.1224C38.4154 35.0436 38.1553 35.7702 37.6352 36.3022C37.115 36.8341 36.3348 37.1001 35.2945 37.1001H31.8226V24.0214Z",
                fill: "#403937"
            }, void 0, false, {
                fileName: "<[project]/src/app/components/icons/logo.tsx>",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                d: "M40.6944 34.2781V28.8675C40.6944 27.9463 40.9545 27.2132 41.4746 26.6683C42.0078 26.1104 42.8075 25.8314 43.8737 25.8314C44.94 25.8314 45.7267 26.1104 46.2339 26.6683C46.754 27.2132 47.0141 27.9463 47.0141 28.8675V32.254H42.0598V34.2197C42.0598 34.8036 42.2418 35.2382 42.6059 35.5237C42.97 35.8091 43.5357 35.9518 44.3029 35.9518C45.0701 35.9518 45.8633 35.8351 46.6825 35.6015V36.886C46.0323 37.0936 45.2586 37.1974 44.3614 37.1974C41.9167 37.1974 40.6944 36.2243 40.6944 34.2781ZM42.0598 31.1057H45.6877V28.8675C45.6877 27.6479 45.0831 27.0381 43.8737 27.0381C42.6644 27.0381 42.0598 27.6479 42.0598 28.8675V31.1057Z",
                fill: "#403937"
            }, void 0, false, {
                fileName: "<[project]/src/app/components/icons/logo.tsx>",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                d: "M49.3849 23.0872H50.7697V37.1001H49.3849V23.0872Z",
                fill: "#403937"
            }, void 0, false, {
                fileName: "<[project]/src/app/components/icons/logo.tsx>",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                d: "M54.1438 24.7804C53.5847 24.7804 53.3051 24.482 53.3051 23.8852C53.3051 23.2883 53.5847 22.9899 54.1438 22.9899C54.716 22.9899 55.002 23.2883 55.002 23.8852C55.002 24.482 54.716 24.7804 54.1438 24.7804ZM53.4611 26.1039H54.846V37.1001H53.4611V26.1039Z",
                fill: "#403937"
            }, void 0, false, {
                fileName: "<[project]/src/app/components/icons/logo.tsx>",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                d: "M61.9846 26.026H63.3889L60.9313 37.1001H58.9808L56.5231 26.026H57.947L59.0198 31.1057L59.9755 36.127C60.3656 33.9732 61.0353 30.6062 61.9846 26.026Z",
                fill: "#403937"
            }, void 0, false, {
                fileName: "<[project]/src/app/components/icons/logo.tsx>",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                d: "M64.8663 34.2781V28.8675C64.8663 27.9463 65.1264 27.2132 65.6465 26.6683C66.1796 26.1104 66.9794 25.8314 68.0456 25.8314C69.1119 25.8314 69.8986 26.1104 70.4058 26.6683C70.9259 27.2132 71.186 27.9463 71.186 28.8675V32.254H66.2317V34.2197C66.2317 34.8036 66.4137 35.2382 66.7778 35.5237C67.1419 35.8091 67.7075 35.9518 68.4747 35.9518C69.2419 35.9518 70.0351 35.8351 70.8544 35.6015V36.886C70.2042 37.0936 69.4305 37.1974 68.5333 37.1974C66.0886 37.1974 64.8663 36.2243 64.8663 34.2781ZM66.2317 31.1057H69.8596V28.8675C69.8596 27.6479 69.255 27.0381 68.0456 27.0381C66.8363 27.0381 66.2317 27.6479 66.2317 28.8675V31.1057Z",
                fill: "#403937"
            }, void 0, false, {
                fileName: "<[project]/src/app/components/icons/logo.tsx>",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                d: "M77.1457 25.9676H77.6333V27.2911H76.9701C76.502 27.2911 76.0794 27.4143 75.7023 27.6609C75.5853 27.7387 75.3317 27.9139 74.9416 28.1864V37.1001H73.5567V26.026H74.8831V26.8629C74.9221 26.837 75.0196 26.7656 75.1757 26.6488C75.3447 26.5321 75.4422 26.4672 75.4682 26.4542C75.5073 26.4283 75.5918 26.3764 75.7218 26.2985C75.8649 26.2207 75.9689 26.1752 76.0339 26.1623C76.1119 26.1363 76.2159 26.1039 76.346 26.065C76.541 26.0001 76.8076 25.9676 77.1457 25.9676Z",
                fill: "#403937"
            }, void 0, false, {
                fileName: "<[project]/src/app/components/icons/logo.tsx>",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                d: "M83.5668 26.026H84.9517L81.9089 40H80.5826L81.1872 37.1001H80.5045L78.0859 26.026H79.4903L80.6606 31.5339L81.5188 36.127C81.7789 34.596 82.0649 33.0649 82.377 31.5339L83.5668 26.026Z",
                fill: "#403937"
            }, void 0, false, {
                fileName: "<[project]/src/app/components/icons/logo.tsx>",
                lineNumber: 72,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/app/components/icons/logo.tsx>",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}

})()),
"[project]/src/app/components/icons/location.tsx [rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Location": ()=>Location
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function Location({ color }) {
    switch(color){
        case 'yellow':
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "22",
                height: "22",
                viewBox: "0 0 22 22",
                fill: "none",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M4.125 19.9375C4.125 19.5578 4.4328 19.25 4.8125 19.25H17.1875C17.5672 19.25 17.875 19.5578 17.875 19.9375C17.875 20.3172 17.5672 20.625 17.1875 20.625H4.8125C4.4328 20.625 4.125 20.3172 4.125 19.9375Z",
                        fill: "#C47F17"
                    }, void 0, false, {
                        fileName: "<[project]/src/app/components/icons/location.tsx>",
                        lineNumber: 15,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M11 6.875C9.86091 6.875 8.9375 7.79841 8.9375 8.9375C8.9375 10.0766 9.86091 11 11 11C12.1391 11 13.0625 10.0766 13.0625 8.9375C13.0625 7.79841 12.1391 6.875 11 6.875ZM7.5625 8.9375C7.5625 7.03902 9.10152 5.5 11 5.5C12.8985 5.5 14.4375 7.03902 14.4375 8.9375C14.4375 10.836 12.8985 12.375 11 12.375C9.10152 12.375 7.5625 10.836 7.5625 8.9375Z",
                        fill: "#C47F17"
                    }, void 0, false, {
                        fileName: "<[project]/src/app/components/icons/location.tsx>",
                        lineNumber: 21,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M11 2.75C9.35897 2.75 7.78516 3.4019 6.62478 4.56228C5.4644 5.72266 4.8125 7.29647 4.8125 8.9375C4.8125 11.7837 6.4019 14.3754 8.08129 16.3067C8.91259 17.2627 9.74566 18.0335 10.371 18.565C10.6184 18.7753 10.8324 18.9474 11 19.0781C11.1676 18.9474 11.3816 18.7753 11.629 18.565C12.2543 18.0335 13.0874 17.2627 13.9187 16.3067C15.5981 14.3754 17.1875 11.7837 17.1875 8.9375C17.1875 7.29647 16.5356 5.72266 15.3752 4.56228C14.2148 3.4019 12.641 2.75 11 2.75ZM11 19.9375C10.6057 20.5007 10.6056 20.5006 10.6053 20.5004L10.6048 20.5L10.6032 20.4989L10.5981 20.4953L10.5806 20.4829C10.5657 20.4723 10.5445 20.457 10.5174 20.4372C10.4632 20.3977 10.3853 20.3399 10.2871 20.2649C10.0908 20.1148 9.81284 19.8952 9.48052 19.6127C8.81684 19.0486 7.93116 18.2295 7.04371 17.2089C5.28561 15.1871 3.4375 12.2788 3.4375 8.9375C3.4375 6.9318 4.23426 5.00825 5.6525 3.59C7.07075 2.17176 8.9943 1.375 11 1.375C13.0057 1.375 14.9293 2.17176 16.3475 3.59C17.7657 5.00825 18.5625 6.9318 18.5625 8.9375C18.5625 12.2788 16.7144 15.1871 14.9563 17.2089C14.0688 18.2295 13.1832 19.0486 12.5195 19.6127C12.1872 19.8952 11.9092 20.1148 11.7129 20.2649C11.6147 20.3399 11.5368 20.3977 11.4826 20.4372C11.4555 20.457 11.4343 20.4723 11.4194 20.4829L11.4019 20.4953L11.3968 20.4989L11.3952 20.5L11.3947 20.5004C11.3944 20.5006 11.3943 20.5007 11 19.9375ZM11 19.9375L11.3943 20.5007C11.1575 20.6664 10.8425 20.6664 10.6057 20.5007L11 19.9375Z",
                        fill: "#C47F17"
                    }, void 0, false, {
                        fileName: "<[project]/src/app/components/icons/location.tsx>",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/app/components/icons/location.tsx>",
                lineNumber: 8,
                columnNumber: 9
            }, this);
        case 'purple':
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "22",
                height: "22",
                viewBox: "0 0 22 22",
                fill: "none",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                    d: "M11 1.375C8.995 1.37727 7.07277 2.17477 5.65502 3.59252C4.23727 5.01027 3.43977 6.9325 3.4375 8.9375C3.4375 15.4086 10.3125 20.2984 10.6047 20.5047C10.7218 20.5827 10.8593 20.6243 11 20.6243C11.1407 20.6243 11.2782 20.5827 11.3953 20.5047C11.6875 20.2984 18.5625 15.4086 18.5625 8.9375C18.5602 6.9325 17.7627 5.01027 16.345 3.59252C14.9272 2.17477 13.005 1.37727 11 1.375ZM11 6.1875C11.5439 6.1875 12.0756 6.34878 12.5278 6.65096C12.9801 6.95313 13.3325 7.38262 13.5407 7.88512C13.7488 8.38762 13.8033 8.94055 13.6972 9.474C13.5911 10.0074 13.3291 10.4974 12.9445 10.882C12.5599 11.2666 12.0699 11.5286 11.5365 11.6347C11.0031 11.7408 10.4501 11.6863 9.94762 11.4782C9.44512 11.27 9.01563 10.9176 8.71346 10.4653C8.41128 10.0131 8.25 9.4814 8.25 8.9375C8.25 8.20815 8.53973 7.50868 9.05546 6.99296C9.57118 6.47723 10.2707 6.1875 11 6.1875Z",
                    fill: "#8047F8"
                }, void 0, false, {
                    fileName: "<[project]/src/app/components/icons/location.tsx>",
                    lineNumber: 45,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/app/components/icons/location.tsx>",
                lineNumber: 38,
                columnNumber: 9
            }, this);
        case 'white':
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "none",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                    d: "M8 1C6.54182 1.00165 5.14383 1.58165 4.11274 2.61274C3.08165 3.64383 2.50165 5.04182 2.5 6.5C2.5 11.2063 7.5 14.7625 7.7125 14.9125C7.79766 14.9692 7.89769 14.9995 8 14.9995C8.10231 14.9995 8.20234 14.9692 8.2875 14.9125C8.5 14.7625 13.5 11.2063 13.5 6.5C13.4983 5.04182 12.9184 3.64383 11.8873 2.61274C10.8562 1.58165 9.45818 1.00165 8 1ZM8 4.5C8.39556 4.5 8.78224 4.6173 9.11114 4.83706C9.44004 5.05682 9.69638 5.36918 9.84776 5.73463C9.99913 6.10009 10.0387 6.50222 9.96157 6.89018C9.8844 7.27814 9.69392 7.63451 9.41421 7.91421C9.13451 8.19392 8.77814 8.3844 8.39018 8.46157C8.00222 8.53874 7.60009 8.49913 7.23463 8.34776C6.86918 8.19638 6.55682 7.94004 6.33706 7.61114C6.1173 7.28224 6 6.89556 6 6.5C6 5.96957 6.21071 5.46086 6.58579 5.08579C6.96086 4.71071 7.46957 4.5 8 4.5Z",
                    fill: "#FAFAFA"
                }, void 0, false, {
                    fileName: "<[project]/src/app/components/icons/location.tsx>",
                    lineNumber: 61,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/app/components/icons/location.tsx>",
                lineNumber: 54,
                columnNumber: 9
            }, this);
    }
}

})()),
"[project]/src/app/components/header.tsx [rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Header": ()=>Header
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nookies$2f$dist$2f$index$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/nookies/dist/index.js [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$countProductToCart$2e$ts__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/api/countProductToCart.ts [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$findUserById$2e$ts__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/api/findUserById.ts [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$cart$2e$tsx__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/cart.tsx [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$icons$2f$location$2e$tsx__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/icons/location.tsx [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$icons$2f$logo$2e$tsx__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/icons/logo.tsx [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$icons$2f$user$2e$tsx__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/icons/user.tsx [rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
;
;
;
async function Header() {
    const cookie = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nookies$2f$dist$2f$index$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["parseCookies"]();
    const userId = cookie['@coffee-delivery:userId'];
    const user = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$findUserById$2e$ts__$5b$rsc$5d$__$28$ecmascript$29$__["findUserById"](userId);
    const amountProductInCart = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$countProductToCart$2e$ts__$5b$rsc$5d$__$28$ecmascript$29$__["countProductToCart"](userId);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("header", {
            className: "w-full bg-background flex justify-between py-8 px-40",
            children: [
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$icons$2f$logo$2e$tsx__$5b$rsc$5d$__$28$ecmascript$29$__["Logo"], {}, void 0, false, {
                        fileName: "<[project]/src/app/components/header.tsx>",
                        lineNumber: 22,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/src/app/components/header.tsx>",
                    lineNumber: 21,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "flex gap-4",
                    children: user ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                disabled: true,
                                className: "flex gap-1 rounded-[0.375rem] items-center p-2 bg-purple-light",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$icons$2f$location$2e$tsx__$5b$rsc$5d$__$28$ecmascript$29$__["Location"], {
                                        color: "purple"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/components/header.tsx>",
                                        lineNumber: 32,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                        className: "font-roboto text-[1.125rem] leading-[160%]",
                                        children: [
                                            user.city,
                                            ", ",
                                            user.state
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/src/app/components/header.tsx>",
                                        lineNumber: 33,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/app/components/header.tsx>",
                                lineNumber: 28,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$cart$2e$tsx__$5b$rsc$5d$__$28$ecmascript$29$__["CallCart"], {
                                amountProductInCart: amountProductInCart
                            }, void 0, false, {
                                fileName: "<[project]/src/app/components/header.tsx>",
                                lineNumber: 37,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: "/register",
                                className: "flex gap-1 rounded-[0.375rem] items-center py-2 px-4 bg-purple-light hover:bg-purple transition-all disabled:hover:bg-purple-light font-roboto text-[1.125rem] font-medium leading-[160%]",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$icons$2f$user$2e$tsx__$5b$rsc$5d$__$28$ecmascript$29$__["User"], {}, void 0, false, {
                                        fileName: "<[project]/src/app/components/header.tsx>",
                                        lineNumber: 45,
                                        columnNumber: 17
                                    }, this),
                                    "Registrar"
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/app/components/header.tsx>",
                                lineNumber: 41,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: "/login",
                                className: "flex gap-1 rounded-[0.375rem] items-center py-2 px-4 bg-purple-light hover:bg-purple transition-all disabled:hover:bg-purple-light font-roboto text-[1.125rem] font-medium leading-[160%]",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$icons$2f$user$2e$tsx__$5b$rsc$5d$__$28$ecmascript$29$__["User"], {}, void 0, false, {
                                        fileName: "<[project]/src/app/components/header.tsx>",
                                        lineNumber: 53,
                                        columnNumber: 17
                                    }, this),
                                    "Login"
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/app/components/header.tsx>",
                                lineNumber: 49,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true)
                }, void 0, false, {
                    fileName: "<[project]/src/app/components/header.tsx>",
                    lineNumber: 25,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/src/app/components/header.tsx>",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false);
}

})()),
"[project]/src/app/layout.tsx [rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>RootLayout,
    "metadata": ()=>metadata
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$header$2e$tsx__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/header.tsx [rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
const metadata = {
    title: 'Coffee Delivery',
    description: 'E-commerce of coffee'
};
function RootLayout({ children }) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("html", {
        lang: "pt-br",
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("head", {
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("link", {
                        rel: "preconnect",
                        href: "https://fonts.googleapis.com"
                    }, void 0, false, {
                        fileName: "<[project]/src/app/layout.tsx>",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("link", {
                        rel: "preconnect",
                        href: "https://fonts.gstatic.com"
                    }, void 0, false, {
                        fileName: "<[project]/src/app/layout.tsx>",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("link", {
                        href: "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap",
                        rel: "stylesheet"
                    }, void 0, false, {
                        fileName: "<[project]/src/app/layout.tsx>",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("link", {
                        rel: "preconnect",
                        href: "https://fonts.googleapis.com"
                    }, void 0, false, {
                        fileName: "<[project]/src/app/layout.tsx>",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("link", {
                        rel: "preconnect",
                        href: "https://fonts.gstatic.com"
                    }, void 0, false, {
                        fileName: "<[project]/src/app/layout.tsx>",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("link", {
                        href: "https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;600;700;800&display=swap",
                        rel: "stylesheet"
                    }, void 0, false, {
                        fileName: "<[project]/src/app/layout.tsx>",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/app/layout.tsx>",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("body", {
                className: ` bg-background`,
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$header$2e$tsx__$5b$rsc$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
                        fileName: "<[project]/src/app/layout.tsx>",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    children
                ]
            }, void 0, true, {
                fileName: "<[project]/src/app/layout.tsx>",
                lineNumber: 34,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/app/layout.tsx>",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}

})()),
"[project]/src/app/layout.tsx [rsc] (ecmascript, Next.js server component)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    default: () => __turbopack_import__("[project]/src/app/layout.tsx [rsc] (ecmascript)"),
});

})()),
"[project]/src/app/login/page.tsx [rsc] (ecmascript, Next.js server component)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    default: () => __turbopack_import__("[project]/src/app/login/page.tsx [rsc] (ecmascript)"),
});

})()),

};

//# sourceMappingURL=[root of the server]__373b44._.js.map