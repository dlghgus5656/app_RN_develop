for (let i = 0; i < mise_list.length; i++) {
  let mise = mise_list[i];
  if (mise["IDEX_MVL"] < 40) {
    let gu_name = mise["MSRSTE_NM"];
    let gu_mise = mise["IDEX_MVL"];
    console.log("40보다 작은 구: " + gu_name + ", " + gu_mise);
  }
}
