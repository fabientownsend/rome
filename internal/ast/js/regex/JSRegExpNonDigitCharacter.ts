/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {NodeBaseWithComments} from "@internal/ast";
import {createBuilder} from "../../utils";

export interface JSRegExpNonDigitCharacter extends NodeBaseWithComments {
	readonly type: "JSRegExpNonDigitCharacter";
}

export const jsRegExpNonDigitCharacter = createBuilder<JSRegExpNonDigitCharacter>(
	"JSRegExpNonDigitCharacter",
	{
		bindingKeys: {},
		visitorKeys: {},
	},
);
