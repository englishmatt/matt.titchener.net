# Migration Urgency: Critical Issues

**Last Updated:** January 15, 2026

## Executive Summary

This site is built on **deprecated technology** with **critical security vulnerabilities** that cannot be fully resolved without a complete migration to modern tooling. Immediate action is required.

---

## 🔴 Critical Issues

### 1. Deprecated Framework - Sapper

**Status:** ⚠️ CRITICAL - End of Life

The site uses [Sapper](https://sapper.svelte.dev/), which has been **officially deprecated** and replaced by [SvelteKit](https://kit.svelte.dev/).

**Impact:**
- No security updates or bug fixes
- No community support
- Incompatible with modern Node.js versions (v20+)
- Blocking dependency updates that fix security vulnerabilities

**Evidence:**
```
npm warn deprecated sapper@0.28.10: SvelteKit is the successor to Sapper
```

---

### 2. Node.js Version Constraints

**Current:** Node.js 18 (in GitHub Actions)
**Status:** ⚠️ END OF MAINTENANCE (April 2025)

**Problem:**
- Node.js 18 reached end-of-life maintenance in April 2025 (7 months ago)
- Node.js 20+ breaks the build due to stricter ES module exports
- Sapper is incompatible with modern Node.js versions
- Running on unsupported Node versions creates security risks

**Build Error with Node 20+:**
```
Package subpath './compiler.js' is not defined by "exports"
in /home/user/matt.titchener.net/site/node_modules/svelte/package.json
```

---

### 3. Security Vulnerabilities

**Current Status:** 28 vulnerabilities (3 critical, 14 high, 7 moderate, 4 low)

#### Critical Vulnerabilities:
1. **@babel/traverse** - Arbitrary code execution when compiling malicious code
2. **minimist** - Prototype pollution vulnerability
3. **shell-quote** - Command injection vulnerability

#### High Severity Vulnerabilities:
- **lodash** - Command injection and ReDoS
- **terser** - ReDoS vulnerability
- **rollup** - XSS vulnerability via DOM clobbering
- **semver** - ReDoS vulnerability
- **cross-spawn** - ReDoS vulnerability
- **json5** - Prototype pollution
- **minimatch** - ReDoS vulnerability
- And others...

**Why These Can't Be Fixed:**
- `npm audit fix` breaks the build (updates Svelte to incompatible version)
- Many vulnerabilities are tied to deprecated dependencies required by Sapper
- Breaking changes would require downgrading Sapper to even older, more vulnerable versions
- The only real fix is migrating to SvelteKit

---

### 4. Outdated Dependencies

All major dependencies are 4-5 years old:

| Package | Current Version | Latest Version | Years Behind |
|---------|----------------|----------------|--------------|
| Svelte | 3.17.3 | 5.x | ~4 years |
| Rollup | 2.33.1 | 4.x | ~3 years |
| Babel | 7.12.x | 7.26.x | ~4 years |
| rollup-plugin-terser | 7.0.2 | deprecated | N/A |
| svgo | 1.3.0 | 3.x | ~4 years |

---

## 📋 What's Been Done

### Recent Changes (January 2026)

✅ **Code Cleanup:**
- Removed unused PDF icon import from about.svelte
- Cleaned up 11 unused CSS selectors from removed Twitter/CV links
- about.svelte now builds without warnings

✅ **GitHub Actions:**
- Updated from Node.js 16 → 18 (EOL → EOL, but necessary for Sapper compatibility)
- Note: Node.js 18 is past end-of-life but Node.js 20+ breaks the build

✅ **Audit Completed:**
- Documented all 28 security vulnerabilities
- Confirmed that `npm audit fix` breaks the build
- Identified that fixes require SvelteKit migration

---

## 🚨 Orphaned Files Found

The following files are no longer referenced in the codebase and should be reviewed for deletion:

1. **`/site/static/Matt Titchener - Résumé and CV.pdf`** (768 KB)
   - CV link was removed in commit 71bf4e6
   - File still exists in repository

2. **`/site/static/pdf-icon.svg`**
   - Icon for CV link, no longer used
   - Import was removed from about.svelte

**Recommendation:** Delete these files or move them outside the static directory if they should be kept for reference.

---

## ✅ Recommended Migration Path

### Phase 1: Immediate Actions (1-2 days)
1. **Decision on orphaned files** - Delete or archive CV PDF and icon
2. **Create a feature branch** for SvelteKit migration
3. **Set up SvelteKit** with similar configuration to current Sapper setup

### Phase 2: Core Migration (1-2 weeks)
1. **Install SvelteKit** and configure routing
2. **Migrate layouts and pages** from Sapper to SvelteKit structure
   - Convert `src/routes/_layout.svelte` → `src/routes/+layout.svelte`
   - Convert page components to use SvelteKit's load functions
   - Update `<a>` tags to use SvelteKit's navigation
3. **Update build process** in GitHub Actions
4. **Migrate static assets** and prerendering configuration

### Phase 3: Modernization (3-5 days)
1. **Update dependencies** to latest versions
   - Svelte 3.x → 5.x
   - Rollup 2.x → 4.x
   - Replace deprecated Babel plugins
2. **Update Node.js** to version 20 LTS (or 22 LTS)
3. **Run full audit** and fix remaining vulnerabilities
4. **Update GitHub Actions** to use modern actions (setup-node@v4)

### Phase 4: Testing & Deployment (2-3 days)
1. **Test all pages** and routes
2. **Verify static export** works correctly
3. **Test GitHub Pages deployment**
4. **Performance audit** and optimization
5. **Deploy to production**

---

## 📚 Migration Resources

- [SvelteKit Migration Guide](https://kit.svelte.dev/docs/migrating)
- [Sapper to SvelteKit - Official Guide](https://github.com/sveltejs/kit/discussions/2450)
- [SvelteKit Documentation](https://kit.svelte.dev/docs)
- [Svelte 5 Migration Guide](https://svelte-5-preview.vercel.app/docs/migration)

---

## ⏱️ Time Sensitivity

**This migration is URGENT because:**

1. **Security vulnerabilities** are exploitable and unfixable
2. **Node.js 18** is no longer maintained (as of April 2025)
3. **No support path** exists for Sapper-related issues
4. **Technical debt** grows daily as the ecosystem moves forward
5. **GitHub Actions** may drop Node.js 18 support at any time

---

## 🎯 Next Steps

1. **Review this document** and decide on migration timeline
2. **Delete or archive** orphaned CV files
3. **Commit current changes** (Node.js version, cleanup, documentation)
4. **Begin SvelteKit migration** as soon as possible

---

## Questions?

For questions about this migration or to get started:
- Review the [SvelteKit documentation](https://kit.svelte.dev/)
- Check the [official migration guide](https://kit.svelte.dev/docs/migrating)
- Consider hiring a Svelte/SvelteKit consultant if needed

**This migration cannot be delayed indefinitely.** The longer it's postponed, the more difficult and risky it becomes.
