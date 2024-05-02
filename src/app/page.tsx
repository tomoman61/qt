"use client";

import { IconClear, IconContentCopy } from "@/components";
import { type ChangeEvent, useState } from "react";

const copyToClipboard = async (
	text: string,
	matter: string,
	hypothesis: string,
	survey: string,
	memo: string,
) => {
	try {
		navigator.clipboard.writeText(
			`#${text}\n\n#事象\n${matter}\n\n#仮説\n${hypothesis}\n\n#調査したこと\n${survey}\n\n#備考\n${memo}`,
		);
	} catch (err) {
		console.error(err);
	}
};
export default function Home() {
	// 質問のタイプ
	const [type, setType] = useState<string>("");
	// #解決したい事象・エラー
	const [matter, setMatter] = useState<string>("");
	// 仮説
	const [hypothesis, setHypothesis] = useState<string>("");
	// 調査したこと
	const [survey, setSurvey] = useState<string>("");
	// 備考
	const [memo, setMemo] = useState<string>("");

	// クリア
	const clear = () => {
		setType("");
		setMatter("");
		setHypothesis("");
		setSurvey("");
		setMemo("");
	};

	return (
		<main className="container mx-5">
			<button
				type="button"
				className="btn btn-primary my-3 mr-36 tooltip tooltip-right"
				data-tip="コピー"
				onClick={() => copyToClipboard(type, matter, hypothesis, survey, memo)}
			>
				<IconContentCopy />
			</button>
			<button
				type="button"
				className="btn btn-secondary my-3 tooltip tooltip-right"
				data-tip="クリア"
				onClick={clear}
			>
				<IconClear />
			</button>
			<label className="form-control max-w-xs mb-3">
				<div className="label">
					<span className="label-text">#質問タイプ</span>
				</div>
				<select
					name={type}
					value={type}
					id="type"
					className="select select-bordered w-full max-w-xs"
					onChange={(e: ChangeEvent<HTMLSelectElement>) =>
						setType(e.target.value)
					}
				>
					<option value="">-</option>
					<option value="質問">質問</option>
					<option value="相談">相談</option>
					<option value="確認">確認</option>
					<option value="エラー">エラー</option>
					<option value="仕様確認">仕様確認</option>
					<option value="その他">その他</option>
				</select>
			</label>

			<label className="form-control max-w-xs mb-3">
				<div className="label">
					<span className="label-text">#解決したい事象・エラー</span>
				</div>
				<textarea
					className="textarea textarea-bordered resize-none"
					name={matter}
					value={matter}
					id="matter"
					onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
						setMatter(e.target.value)
					}
				/>
			</label>

			<label className="form-control max-w-xs mb-3">
				<div className="label">
					<span className="label-text">#仮説</span>
				</div>
				<textarea
					className="textarea textarea-bordered resize-none"
					name={hypothesis}
					value={hypothesis}
					id="hypothesis"
					onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
						setHypothesis(e.target.value)
					}
				/>
			</label>

			<label className="form-control max-w-xs mb-3">
				<div className="label">
					<span className="label-text">#調査したこと</span>
				</div>
				<textarea
					className="textarea textarea-bordered resize-none"
					name={survey}
					value={survey}
					id="survey"
					onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
						setSurvey(e.target.value)
					}
				/>
			</label>

			<label className="form-control max-w-xs mb-3">
				<div className="label">
					<span className="label-text">#備考</span>
				</div>
				<textarea
					className="textarea textarea-bordered resize-none"
					name={memo}
					value={memo}
					id="memo"
					onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
						setMemo(e.target.value)
					}
				/>
			</label>
		</main>
	);
}
