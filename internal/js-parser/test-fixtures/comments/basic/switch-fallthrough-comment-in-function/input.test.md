# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `comments > basic > switch-fallthrough-comment-in-function`

### `ast`

```javascript
JSRoot {
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "comments/basic/switch-fallthrough-comment-in-function/input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "comments/basic/switch-fallthrough-comment-in-function/input.js"
		end: Object {
			column: 0
			line: 10
		}
		start: Object {
			column: 0
			line: 1
		}
	}
	comments: Array [
		CommentLine {
			id: "0"
			value: " foo"
			loc: Object {
				filename: "comments/basic/switch-fallthrough-comment-in-function/input.js"
				end: Object {
					column: 14
					line: 3
				}
				start: Object {
					column: 8
					line: 3
				}
			}
		}
		CommentLine {
			id: "1"
			value: " falls through"
			loc: Object {
				filename: "comments/basic/switch-fallthrough-comment-in-function/input.js"
				end: Object {
					column: 28
					line: 5
				}
				start: Object {
					column: 12
					line: 5
				}
			}
		}
	]
	body: Array [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "bar"
				loc: Object {
					filename: "comments/basic/switch-fallthrough-comment-in-function/input.js"
					identifierName: "bar"
					end: Object {
						column: 12
						line: 1
					}
					start: Object {
						column: 9
						line: 1
					}
				}
			}
			loc: Object {
				filename: "comments/basic/switch-fallthrough-comment-in-function/input.js"
				end: Object {
					column: 1
					line: 9
				}
				start: Object {
					column: 0
					line: 1
				}
			}
			head: JSFunctionHead {
				async: false
				generator: false
				hasHoistedVars: false
				rest: undefined
				returnType: undefined
				thisType: undefined
				typeParameters: undefined
				loc: Object {
					filename: "comments/basic/switch-fallthrough-comment-in-function/input.js"
					end: Object {
						column: 17
						line: 1
					}
					start: Object {
						column: 12
						line: 1
					}
				}
				params: Array [
					JSBindingIdentifier {
						name: "foo"
						loc: Object {
							filename: "comments/basic/switch-fallthrough-comment-in-function/input.js"
							identifierName: "foo"
							end: Object {
								column: 16
								line: 1
							}
							start: Object {
								column: 13
								line: 1
							}
						}
						meta: JSPatternMeta {
							optional: undefined
							typeAnnotation: undefined
							loc: Object {
								filename: "comments/basic/switch-fallthrough-comment-in-function/input.js"
								end: Object {
									column: 16
									line: 1
								}
								start: Object {
									column: 13
									line: 1
								}
							}
						}
					}
				]
			}
			body: JSBlockStatement {
				directives: Array []
				loc: Object {
					filename: "comments/basic/switch-fallthrough-comment-in-function/input.js"
					end: Object {
						column: 1
						line: 9
					}
					start: Object {
						column: 18
						line: 1
					}
				}
				body: Array [
					JSSwitchStatement {
						loc: Object {
							filename: "comments/basic/switch-fallthrough-comment-in-function/input.js"
							end: Object {
								column: 5
								line: 8
							}
							start: Object {
								column: 4
								line: 2
							}
						}
						discriminant: JSReferenceIdentifier {
							name: "foo"
							loc: Object {
								filename: "comments/basic/switch-fallthrough-comment-in-function/input.js"
								identifierName: "foo"
								end: Object {
									column: 14
									line: 2
								}
								start: Object {
									column: 11
									line: 2
								}
							}
						}
						cases: Array [
							JSSwitchCase {
								consequent: Array []
								leadingComments: Array ["0"]
								trailingComments: Array ["1"]
								loc: Object {
									filename: "comments/basic/switch-fallthrough-comment-in-function/input.js"
									end: Object {
										column: 15
										line: 4
									}
									start: Object {
										column: 8
										line: 4
									}
								}
								test: JSNumericLiteral {
									value: 1
									format: undefined
									leadingComments: undefined
									loc: Object {
										filename: "comments/basic/switch-fallthrough-comment-in-function/input.js"
										end: Object {
											column: 14
											line: 4
										}
										start: Object {
											column: 13
											line: 4
										}
									}
								}
							}
							JSSwitchCase {
								leadingComments: Array ["1"]
								loc: Object {
									filename: "comments/basic/switch-fallthrough-comment-in-function/input.js"
									end: Object {
										column: 19
										line: 7
									}
									start: Object {
										column: 8
										line: 6
									}
								}
								test: JSNumericLiteral {
									value: 2
									format: undefined
									leadingComments: undefined
									loc: Object {
										filename: "comments/basic/switch-fallthrough-comment-in-function/input.js"
										end: Object {
											column: 14
											line: 6
										}
										start: Object {
											column: 13
											line: 6
										}
									}
								}
								consequent: Array [
									JSExpressionStatement {
										loc: Object {
											filename: "comments/basic/switch-fallthrough-comment-in-function/input.js"
											end: Object {
												column: 19
												line: 7
											}
											start: Object {
												column: 12
												line: 7
											}
										}
										expression: JSCallExpression {
											arguments: Array []
											loc: Object {
												filename: "comments/basic/switch-fallthrough-comment-in-function/input.js"
												end: Object {
													column: 18
													line: 7
												}
												start: Object {
													column: 12
													line: 7
												}
											}
											callee: JSReferenceIdentifier {
												name: "doIt"
												loc: Object {
													filename: "comments/basic/switch-fallthrough-comment-in-function/input.js"
													identifierName: "doIt"
													end: Object {
														column: 16
														line: 7
													}
													start: Object {
														column: 12
														line: 7
													}
												}
											}
										}
									}
								]
							}
						]
					}
				]
			}
		}
	]
}
```

### `diagnostics`

```
✔ No known problems!

```
