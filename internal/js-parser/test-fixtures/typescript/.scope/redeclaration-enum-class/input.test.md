# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `typescript > scope > redeclaration-enum-class`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "input.ts"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "module"
	syntax: Array ["ts"]
	loc: Object {
		filename: "input.ts"
		end: Object {
			column: 10
			index: 20
			line: 2
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		TSEnumDeclaration {
			id: JSBindingIdentifier {
				name: "X"
				loc: Object {
					filename: "input.ts"
					identifierName: "X"
					end: Object {
						column: 6
						index: 6
						line: 1
					}
					start: Object {
						column: 5
						index: 5
						line: 1
					}
				}
			}
			const: false
			members: Array []
			loc: Object {
				filename: "input.ts"
				end: Object {
					column: 9
					index: 9
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
		}
		JSClassDeclaration {
			id: JSBindingIdentifier {
				name: "X"
				loc: Object {
					filename: "input.ts"
					identifierName: "X"
					end: Object {
						column: 7
						index: 17
						line: 2
					}
					start: Object {
						column: 6
						index: 16
						line: 2
					}
				}
			}
			loc: Object {
				filename: "input.ts"
				end: Object {
					column: 10
					index: 20
					line: 2
				}
				start: Object {
					column: 0
					index: 10
					line: 2
				}
			}
			meta: JSClassHead {
				body: Array []
				implements: undefined
				superClass: undefined
				superTypeParameters: undefined
				typeParameters: undefined
				loc: Object {
					filename: "input.ts"
					end: Object {
						column: 10
						index: 20
						line: 2
					}
					start: Object {
						column: 0
						index: 10
						line: 2
					}
				}
			}
		}
	]
}
```

### `diagnostics`

```
✔ No known problems!

```
