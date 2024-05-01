"use client";

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

function IconContentCopy(props: React.SVGProps<SVGSVGElement>) {
	return (
		// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
		<svg
			viewBox="0 0 24 24"
			fill="currentColor"
			height="1.8em"
			width="1.8em"
			{...props}
		>
			<path d="M19 21H8V7h11m0-2H8a2 2 0 00-2 2v14a2 2 0 002 2h11a2 2 0 002-2V7a2 2 0 00-2-2m-3-4H4a2 2 0 00-2 2v14h2V3h12V1z" />
		</svg>
	);
}

function IconClear(props: React.SVGProps<SVGSVGElement>) {
	return (
		// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
		<svg
			viewBox="0 0 1024 1024"
			fill="currentColor"
			height="1.7em"
			width="1.7em"
			{...props}
		>
			<defs>
				<style />
			</defs>
			<path d="M899.1 869.6l-53-305.6H864c14.4 0 26-11.6 26-26V346c0-14.4-11.6-26-26-26H618V138c0-14.4-11.6-26-26-26H432c-14.4 0-26 11.6-26 26v182H160c-14.4 0-26 11.6-26 26v192c0 14.4 11.6 26 26 26h17.9l-53 305.6c-.3 1.5-.4 3-.4 4.4 0 14.4 11.6 26 26 26h723c1.5 0 3-.1 4.4-.4 14.2-2.4 23.7-15.9 21.2-30zM204 390h272V182h72v208h272v104H204V390zm468 440V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H416V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H202.8l45.1-260H776l45.1 260H672z" />
		</svg>
	);
}
