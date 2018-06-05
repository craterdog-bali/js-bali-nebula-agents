/************************************************************************
 * Copyright (c) Crater Dog Technologies(TM).  All Rights Reserved.     *
 ************************************************************************
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.        *
 *                                                                      *
 * This code is free software; you can redistribute it and/or modify it *
 * under the terms of The MIT License (MIT), as published by the Open   *
 * Source Initiative. (See http://opensource.org/licenses/MIT)          *
 ************************************************************************/
'use strict';

/**
 * This library provides functions that analyze a Bali Type Document in
 * preparation for compilation.
 */


// PUBLIC FUNCTIONS

/**
 * This function traverses a parse tree structure containing a Bali type
 * analyzing it for correctness and returning context information needed
 * by the compiler.
 * 
 * @param {object} baliType The parse tree structure for the Bali type.
 * @returns {object} The context information.
 */
exports.analyzeType = function(baliType) {
    var context = {
        '$types': {},
        '$literals': {},
        '$variables': {},
        '$references': {},
        '$intrinsics': {},
        '$procedures': {},
        '$addresses': {}
    };
    //TODO: do the actual analysis
    return context;
};

/**
 * This function traverses a parse tree structure containing a Bali type
 * analyzing it for correctness and returning context information needed
 * by the compiler.
 * 
 * @param {object} baliType The parse tree structure for the Bali type.
 * @returns {object} The context information.
 */
exports.extractProcedures = function(baliType) {
    var procedures = [];
    //TODO: do the actual extraction
    return procedures;
};