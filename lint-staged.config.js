const processFiles = (fileNames) => {
  const joinedFileNames = fileNames.join(' ');
  return [
    `pnpm exec eslint ${joinedFileNames}`,
    `pnpm exec prettier -w ${joinedFileNames}`,
  ];
};

const lintStagedConfig = {
  'src/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx,css,scss}': processFiles,
  './*.{js,mjs,cjs,ts,mts,cts,jsx,tsx,css,scss}': processFiles,
};

// import/no-anonymous-default-export
export default lintStagedConfig;
